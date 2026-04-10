export default function Features() {
  return (
    <section className="features-container">
      
      {/* ROW 1: CLIENTS */}
      <div className="feature-row">
        <div className="feature-text">
          <h2>For Clients: Total Project Orchestration</h2>
          <p>Stop losing track of assets in email threads. Post your project requirements to a centralized hub and let our matching algorithm connect you with vetted talent.</p>
          <ul className="feature-list">
            <li>Post detailed gigs with specific technical requirements.</li>
            <li>Hire individual freelancers or contract an entire agency.</li>
            <li>Track milestones and approve work within a single dashboard.</li>
          </ul>
        </div>
        <div className="feature-visual">
          {/* Linked to public/client-dash.jpg */}
          <img src="/client-dash.jpg" alt="Dashboard UI Preview" />
        </div>
      </div>

      {/* ROW 2: FREELANCERS */}
      <div className="feature-row reverse">
        <div className="feature-text">
          <h2>For Freelancers: Predictable Career Growth</h2>
          <p>Escape the endless scroll of massive job boards. Set your skills, availability, and rates. Get notified the second a relevant gig is posted to the network.</p>
          <ul className="feature-list">
            <li>Real-time gig notifications matching your specific tech stack.</li>
            <li>Accept jobs instantly using integrated smart contracts.</li>
            <li>Get absorbed into agency rosters for long-term, stable enterprise work.</li>
          </ul>
        </div>
        <div className="feature-visual">
          {/* Linked to public/freelancer-dash.jpg */}
          <img src="/freelancer-dash.jpg" alt="Real-Time Job Board Preview" />
        </div>
      </div>

      {/* ROW 3: AGENCIES */}
      <div className="feature-row">
        <div className="feature-text">
          <h2>For Agencies: Dynamic Workforce Scaling</h2>
          <p>Never turn down a massive client contract because you lack immediate manpower. Use OneWork to instantly spin up affiliated teams and manage your talent pool.</p>
          <ul className="feature-list">
            <li>Maintain a private roster of affiliated freelance talent.</li>
            <li>Bid on massive client projects as a unified front.</li>
            <li>Distribute micro-tasks to your team members in real-time.</li>
          </ul>
        </div>
        <div className="feature-visual">
          {/* Linked to public/agency-dash.jpg */}
          <img src="/agency-dash.jpg" alt="Agency Roster Management" />
        </div>
      </div>

    </section>
  );
}