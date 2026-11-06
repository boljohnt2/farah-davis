import { businessPlan as p } from '../../lib/business-plan';

// Draft page: not linked from the site and hidden from search engines.
export const metadata = {
  title: 'Business plan draft',
  robots: { index: false, follow: false },
};

export default function BusinessPlanPage() {
  return (
    <main className="plan">
      <div className="plan-wrap">
        <p className="plan-draft">Draft. Not linked from the site.</p>
        <h1 className="serif plan-title">{p.name}</h1>
        <p className="plan-sub">{p.subtitle}</p>
        <p className="plan-note">{p.note}</p>

        <section className="plan-sec">
          <h2>Mission</h2>
          <p>{p.mission}</p>
        </section>

        <section className="plan-sec">
          <h2>The Problem</h2>
          <p>{p.problem}</p>
        </section>

        <section className="plan-sec">
          <h2>Target Audience</h2>
          <p>{p.audience.primary}</p>
          <p>
            <b>Secondary:</b> {p.audience.secondary}
          </p>
        </section>

        <section className="plan-sec">
          <h2>Signature Approach</h2>
          <p>{p.approach}</p>
        </section>

        <section className="plan-sec">
          <h2>Revenue Streams</h2>
          <table className="plan-table">
            <thead>
              <tr>
                <th>Stream</th>
                <th>Offer</th>
                <th>Price Range</th>
              </tr>
            </thead>
            <tbody>
              {p.revenue.map((r) => (
                <tr key={r.stream}>
                  <td>{r.stream}</td>
                  <td>{r.offer}</td>
                  <td>{r.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <section className="plan-sec">
          <h2>Marketing and Growth</h2>
          <ul>
            {p.marketing.map((m) => (
              <li key={m}>{m}</li>
            ))}
          </ul>
        </section>

        <section className="plan-sec">
          <h2>Operations</h2>
          <p>{p.operations}</p>
        </section>

        <section className="plan-sec">
          <h2>12-Month Goals</h2>
          <ul>
            {p.goals.map((g) => (
              <li key={g}>{g}</li>
            ))}
          </ul>
        </section>

        <section className="plan-sec">
          <h2>Financial Snapshot</h2>
          <ul>
            {p.financials.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>
        </section>

        <section className="plan-sec">
          <h2>Success Metrics</h2>
          <p>{p.metrics}</p>
        </section>
      </div>
    </main>
  );
}
