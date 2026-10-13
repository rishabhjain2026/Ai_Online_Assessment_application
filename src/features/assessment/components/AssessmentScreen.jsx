import QuestionCard from './QuestionCard.jsx'
import QuestionNavigator from './QuestionNavigator.jsx'
import { formatTime } from '../assessmentState.js'

export default function AssessmentScreen({
  questions,
  state,
  dispatch,
  answeredCount,
}) {
  const question = questions[state.currentQuestion]

  return (
    <section className="assessment-view">
      <div className="assessment-heading">
        <div>
          <div className="eyebrow">
            <span className="eyebrow-line" /> FRONTEND DEVELOPMENT
          </div>
          <h1>Skills assessment</h1>
          <p>Take your time. You’re doing great.</p>
        </div>
        <div
          className={`timer ${state.timeRemaining <= 60 ? 'timer-urgent' : ''}`}
          aria-live="polite"
        >
          <span className="timer-icon">◷</span>
          <div>
            <small>TIME REMAINING</small>
            <strong>{formatTime(state.timeRemaining)}</strong>
          </div>
        </div>
      </div>
      <div className="assessment-progress">
        <div>
          <span>YOUR PROGRESS</span>
          <strong>
            {answeredCount} <small>of {questions.length} answered</small>
          </strong>
        </div>
        <div className="progress-track">
          <span style={{ width: `${(answeredCount / questions.length) * 100}%` }} />
        </div>
      </div>
      <div className="assessment-layout">
        <QuestionCard
          question={question}
          state={state}
          dispatch={dispatch}
          questionCount={questions.length}
        />
        <QuestionNavigator
          questions={questions}
          state={state}
          dispatch={dispatch}
        />
      </div>
    </section>
  )
}
