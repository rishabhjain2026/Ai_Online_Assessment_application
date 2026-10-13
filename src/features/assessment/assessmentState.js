import { useEffect, useReducer } from 'react'
import questionData from '../../data/questions.json'

export const STORAGE_KEY = 'aimerz-assessment-state'
export const DURATION_SECONDS = 10 * 60
export { questionData }

const createFreshState = () => ({
  status: 'intro',
  currentQuestion: 0,
  answers: {},
  timeRemaining: DURATION_SECONDS,
})

const createInitialState = () => {
  try {
    const savedState = JSON.parse(localStorage.getItem(STORAGE_KEY))
    const isValid =
      savedState &&
      ['intro', 'active', 'submitted'].includes(savedState.status) &&
      Number.isInteger(savedState.currentQuestion) &&
      savedState.currentQuestion >= 0 &&
      savedState.currentQuestion < questionData.length &&
      savedState.answers &&
      typeof savedState.answers === 'object' &&
      Number.isInteger(savedState.timeRemaining)

    if (isValid) return savedState
  } catch (error) {
    console.error('Unable to restore the saved assessment.', error)
  }

  return createFreshState()
}

const assessmentReducer = (state, action) => {
  switch (action.type) {
    case 'START':
      return { ...state, status: 'active' }
    case 'SELECT_ANSWER':
      return {
        ...state,
        answers: { ...state.answers, [action.questionId]: action.answerIndex },
      }
    case 'GO_TO_QUESTION':
      return { ...state, currentQuestion: action.index }
    case 'TICK':
      if (state.status !== 'active') return state
      if (state.timeRemaining <= 1) {
        return { ...state, timeRemaining: 0, status: 'submitted' }
      }
      return { ...state, timeRemaining: state.timeRemaining - 1 }
    case 'SUBMIT':
      return { ...state, status: 'submitted' }
    case 'RESTART':
      return createFreshState()
    default:
      return state
  }
}

export const formatTime = (totalSeconds) => {
  const minutes = Math.floor(totalSeconds / 60)
  const seconds = totalSeconds % 60
  return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
}

export function useAssessment() {
  const [state, dispatch] = useReducer(
    assessmentReducer,
    undefined,
    createInitialState,
  )

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
    } catch (error) {
      console.error('Unable to save the assessment progress.', error)
    }
  }, [state])

  useEffect(() => {
    if (state.status !== 'active') return undefined

    const timerId = window.setInterval(() => dispatch({ type: 'TICK' }), 1000)
    return () => window.clearInterval(timerId)
  }, [state.status])

  return { state, dispatch }
}
