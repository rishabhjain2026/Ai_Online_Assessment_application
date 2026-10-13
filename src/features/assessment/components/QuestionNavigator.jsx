export default function QuestionNavigator({ questions, state, dispatch }) {
  return (
    <aside className="question-nav">
      <h3>Question navigator</h3>
      <p>Jump to any question</p>
      <div className="question-grid">
        {questions.map((question, index) => (
          <button
            key={question.id}
            className={`question-number ${index === state.currentQuestion ? 'number-current' : ''} ${state.answers[question.id] !== undefined ? 'number-answered' : ''}`}
            onClick={() =>
              dispatch({ type: 'GO_TO_QUESTION', index })
            }
            aria-label={`Go to question ${index + 1}${state.answers[question.id] !== undefined ? ', answered' : ', unanswered'}`}
          >
            {String(index + 1).padStart(2, '0')}
          </button>
        ))}
      </div>
      <div className="legend">
        <span>
          <i className="legend-dot legend-done" /> Answered
        </span>
        <span>
          <i className="legend-dot" /> Not answered
        </span>
      </div>
      <div className="nav-note">
        <span>✦</span>
        <p>You can change your answers at any time before submitting.</p>
      </div>
      <button
        className="submit-link"
        onClick={() => dispatch({ type: 'SUBMIT' })}
      >
        Finish and submit <span>→</span>
      </button>
    </aside>
  )
}
