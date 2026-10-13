export default function StartScreen({ onStart }) {
  return (
    <section className="intro-view" id="home">
      <div className="intro-copy">
        <div className="eyebrow">
          <span className="eyebrow-line" /> YOUR NEXT CHAPTER STARTS HERE
        </div>
        <h1>
          Show us what
          <br />
          you <span>can do.</span>
        </h1>
        <p className="intro-description">
          A quick check-in on your frontend fundamentals. Take a breath, trust
          what you know, and do your best.
        </p>
        <div className="intro-facts">
          <div className="fact">
            <span className="fact-icon">◷</span>
            <div>
              <strong>10 minutes</strong>
              <small>Time limit</small>
            </div>
          </div>
          <span className="fact-divider" />
          <div className="fact">
            <span className="fact-icon fact-number">10</span>
            <div>
              <strong>Questions</strong>
              <small>Multiple choice</small>
            </div>
          </div>
          <span className="fact-divider" />
          <div className="fact">
            <span className="fact-icon">✓</span>
            <div>
              <strong>One attempt</strong>
              <small>Make it count</small>
            </div>
          </div>
        </div>
        <button
          className="button button-primary start-button"
          onClick={onStart}
        >
          Start assessment <span aria-hidden="true">→</span>
        </button>
        <p className="intro-footnote">
          <span aria-hidden="true">⌁</span> Your progress is saved automatically
        </p>
      </div>
      <aside className="intro-art" aria-label="Assessment overview">
        <div className="art-orbit orbit-one" />
        <div className="art-orbit orbit-two" />
        <div className="art-card card-back">
          <span>CSS</span>
          <i>◉</i>
        </div>
        <div className="art-card card-front">
          <div className="card-topline">
            <span className="tiny-dots">•••</span>
            <span>YOUR POTENTIAL</span>
          </div>
          <div className="code-mark">
            &lt;<b>greatness</b> /&gt;
          </div>
          <div className="progress-label">
            <span>READY TO BEGIN</span>
            <span>100%</span>
          </div>
          <div className="art-progress">
            <span />
          </div>
          <div className="art-bottom">
            <span className="avatar-stack">
              <i>J</i>
              <i>M</i>
              <i>A</i>
            </span>
            <span>You’ve got this</span>
            <b>✦</b>
          </div>
        </div>
        <span className="sparkle sparkle-one">✳</span>
        <span className="sparkle sparkle-two">✦</span>
        <span className="art-caption">
          A little challenge.
          <br />
          <strong>A big opportunity.</strong>
        </span>
      </aside>
      <div className="intro-bottom">
        <span>BUILT FOR WHAT’S NEXT</span>
        <span>TAKE YOUR TIME. TRUST YOUR INSTINCTS.</span>
      </div>
    </section>
  )
}
