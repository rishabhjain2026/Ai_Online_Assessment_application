export default function QuestionCard({ question, state, dispatch, questionCount }) {
  const isFirstQuestion = state.currentQuestion === 0
  const isLastQuestion = state.currentQuestion === questionCount - 1

  return (
    <article className="question-panel">
      <div className="question-meta">
        <span>QUESTION {String(state.currentQuestion + 1).padStart(2, '0')}</span>
        <span>{question.category}</span>
      </div>
      <h2>{question.question}</h2>
      <p className="select-hint">Choose the best answer</p>
      <div className="answer-list">
        {question.options.map((option, index) => {
          const selected = state.answers[question.id] === index

          return (
            <button
              className={`answer-option ${selected ? 'answer-selected' : ''}`}
              key={option}
              onClick={() =>
                dispatch({
                  type: 'SELECT_ANSWER',
                  questionId: question.id,
                  answerIndex: index,
                })
              }
              aria-pressed={selected}
            >
              <span className="answer-letter">
                {String.fromCharCode(65 + index)}
              </span>
              <span>{option}</span>
              <span className="answer-check" aria-hidden="true">
                {selected ? '✓' : ''}
              </span>
            </button>
          )
        })}
      </div>
      <div className="question-actions">
        <button
          className="button button-quiet"
          onClick={() =>
            dispatch({
              type: 'GO_TO_QUESTION',
              index: state.currentQuestion - 1,
            })
          }
          disabled={isFirstQuestion}
        >
          ← <span>Previous</span>
        </button>
        {isLastQuestion ? (
          <button
            className="button button-primary"
            onClick={() => dispatch({ type: 'SUBMIT' })}
          >
            Submit assessment <span aria-hidden="true">→</span>
          </button>
        ) : (
          <button
            className="button button-primary"
            onClick={() =>
              dispatch({
                type: 'GO_TO_QUESTION',
                index: state.currentQuestion + 1,
              })
            }
          >
            Next question <span aria-hidden="true">→</span>
          </button>
        )}
      </div>
    </article>
  )
}
