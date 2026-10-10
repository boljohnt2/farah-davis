export default function Proof() {
  return (
    <section id="proof" className="proof light" aria-labelledby="proof-title">
      <div className="wrap sec">
        <div className="sechead reveal">
          <h2 id="proof-title" className="serif h2">
            What people say.
          </h2>
        </div>
        <div>
          <figure className="tq reveal" style={{ '--d': 0 }}>
            <span className="qm" aria-hidden="true">
              "
            </span>
            <blockquote>
              <p>
                I walked in juggling everything. I walked out with a plan for
                the week and a free Sunday.
              </p>
            </blockquote>
            <figcaption>
              <b>[Client name]</b>
              <span>Parent of two</span>
            </figcaption>
          </figure>
          <figure className="tq reveal" style={{ '--d': 1 }}>
            <span className="qm" aria-hidden="true">
              "
            </span>
            <blockquote>
              <p>
                Farah asked the question I had been avoiding for two years. Then
                she helped me answer it.
              </p>
            </blockquote>
            <figcaption>
              <b>[Client name]</b>
              <span>Marketing director</span>
            </figcaption>
          </figure>
          <figure className="tq reveal" style={{ '--d': 2 }}>
            <span className="qm" aria-hidden="true">
              "
            </span>
            <blockquote>
              <p>
                My offer finally made sense, and so did my pricing. I booked my
                first clients that month.
              </p>
            </blockquote>
            <figcaption>
              <b>[Client name]</b>
              <span>New business owner</span>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
