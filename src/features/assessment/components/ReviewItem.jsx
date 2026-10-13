export default function ReviewItem({ question, index, selectedAnswer }) {
  const isCorrect = selectedAnswer === question.correctAnswer
  const wasAnswered = selectedAnswer !== undefined

  return (
    <article className="review-item">
      <div
        className={`review-result-icon ${isCorrect ? 'review-correct' : 'review-incorrect'}`}
      >
        {isCorrect ? '✓' : '×'}
      </div>
      <div className="review-content">
        <div className="review-question-meta">
          <span>QUESTION {String(index + 1).padStart(2, '0')}</span>
          <span
            className={
              isCorrect ? 'review-status-correct' : 'review-status-incorrect'
            }
          >
            {isCorrect ? 'Correct' : wasAnswered ? 'Incorrect' : 'Unanswered'}
          </span>
        </div>
        <h3>{question.question}</h3>
        <p className="review-answer">
          <span>Your answer</span>
          {wasAnswered ? question.options[selectedAnswer] : 'Not answered'}
        </p>
        {!isCorrect && (
          <p className="correct-answer">
            <span>Correct answer</span>
            {question.options[question.correctAnswer]}
          </p>
        )}
        <p className="review-explanation">{question.explanation}</p>
      </div>
    </article>
  )
}
