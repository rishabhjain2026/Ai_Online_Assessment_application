import AssessmentScreen from './components/AssessmentScreen.jsx'
import ResultsScreen from './components/ResultsScreen.jsx'
import SiteFooter from './components/SiteFooter.jsx'
import SiteHeader from './components/SiteHeader.jsx'
import StartScreen from './components/StartScreen.jsx'
import { questionData, useAssessment } from './assessmentState.js'
import './assessment.css'

export default function AssessmentApp() {
  const { state, dispatch } = useAssessment()
  const answeredCount = Object.keys(state.answers).length
  const correctCount = questionData.reduce(
    (score, question) =>
      score +
      (state.answers[question.id] === question.correctAnswer ? 1 : 0),
    0,
  )

  return (
    <main className="app-shell">
      <SiteHeader />
      {state.status === 'intro' && (
        <StartScreen onStart={() => dispatch({ type: 'START' })} />
      )}
      {state.status === 'active' && (
        <AssessmentScreen
          questions={questionData}
          state={state}
          dispatch={dispatch}
          answeredCount={answeredCount}
        />
      )}
      {state.status === 'submitted' && (
        <ResultsScreen
          questions={questionData}
          state={state}
          correctCount={correctCount}
          answeredCount={answeredCount}
          onRestart={() => dispatch({ type: 'RESTART' })}
        />
      )}
      <SiteFooter />
    </main>
  )
}
