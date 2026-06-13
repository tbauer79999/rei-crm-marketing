import '../home.css';

export default function ProofResults() {
  return (
    <section className="proof-results">
      <div className="wrap">
        <div className="results-card">
          <div className="results-top">
            <span className="tagm">Proof · Staffing firm</span>
            <span className="ver">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#12A150" strokeWidth="2.6">
                <path d="M20 6 9 17l-5-5" />
              </svg>{' '}
              7-day campaign
            </span>
          </div>
          <div className="results-grid">
            <div className="rcell">
              <div className="rn">12</div>
              <div className="rl">hot leads generated in 7 days</div>
            </div>
            <div className="rcell">
              <div className="rn">11</div>
              <div className="rl">appointments booked</div>
            </div>
            <div className="rcell">
              <div className="rn g">~$300K</div>
              <div className="rl">in potential pipeline</div>
            </div>
            <div className="rcell">
              <div className="rn">1</div>
              <div className="rl">already closed</div>
            </div>
          </div>
          <div className="results-foot">
            <p className="narr">
              A staffing firm generated <b>12 hot leads in 7 days.</b> One closed, eleven
              appointments booked, and roughly <b>$300K in potential pipeline.</b>
            </p>
            <p className="mono">Real customer. Real campaign. No VA. No SDR.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
