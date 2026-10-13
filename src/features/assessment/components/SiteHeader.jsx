export default function SiteHeader() {
  return (
    <header className="topbar">
      <a className="brand" href="#home" aria-label="Aimerz home">
        <span className="brand-mark">a</span>
        <span>
          aimerz<span className="brand-dot">.</span>
        </span>
      </a>
      <div className="topbar-label">
        <span className="status-dot" /> Skills assessment
      </div>
      <div className="topbar-meta">FRONTEND DEVELOPMENT</div>
    </header>
  )
}
