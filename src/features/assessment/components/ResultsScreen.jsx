import { DURATION_SECONDS, formatTime } from '../assessmentState.js'
import ReviewItem from './ReviewItem.jsx'

export default function ResultsScreen({
  questions,
  state,
  correctCount,
  answeredCount,
  onRestart,
}) {
  const percentage = Math.round((correctCount / questions.length) * 100)

  return (
    <section className="results-view">
      <div className="result-hero">
        <div className="eyebrow">
          <span className="eyebrow-line" /> ASSESSMENT COMPLETE
        </div>
        <div className="score-ring" style={{ '--score': `${percentage}%` }}>
          <div>
            <strong>
              {percentage}
              <small>%</small>
            </strong>
            <span>YOUR SCORE</span>
          </div>
        </div>
        <h1>{percentage >= 70 ? 'Nicely done.' : 'Good effort.'}</h1>
        <p>
          You got <strong>{correctCount} out of {questions.length}</strong>{' '}
          questions right. Every step is progress.
        </p>
        <div className="result-stats">
          <div>
            <strong>{correctCount}</strong>
            <span>Correct</span>
          </div>
          <div>
            <strong>{questions.length - answeredCount}</strong>
            <span>Unanswered</span>
          </div>
          <div>
            <strong>{formatTime(DURATION_SECONDS - state.timeRemaining)}</strong>
            <span>Time taken</span>
          </div>
        </div>
        <button
          className="button button-primary restart-button"
          onClick={onRestart}
        >
          Restart assessment <span aria-hidden="true">↻</span>
        </button>
      </div>
      <div className="review-section">
        <div className="review-heading">
          <div>
            <div className="eyebrow">
              <span className="eyebrow-line" /> YOUR ANSWERS
            </div>
            <h2>Assessment review</h2>
          </div>
          <span>{questions.length} QUESTIONS</span>
        </div>
        <div className="review-list">
          {questions.map((question, index) => (
            <ReviewItem
              key={question.id}
              question={question}
              index={index}
              selectedAnswer={state.answers[question.id]}
            />
          ))}
        </div>
        <div className="review-footer">
          <span>✦</span> Keep learning. Keep growing. You’re on your way.
        </div>
      </div>
    </section>
  )
}
