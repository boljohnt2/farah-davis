export default function About() {
  return (
    <section id="about" className="light" aria-labelledby="about-title">
      <div className="wrap sec">
        <div className="about">
          <figure className="aph reveal">
            <img
              src="/assets/10ca37666943f29e166adb598b610bf7.jpg"
              alt="Farah smiling and holding a glass beside a bar cart with flowers, lemons and a jug"
            />
            <figcaption className="serif">Chef, author, coach</figcaption>
          </figure>
          <div className="copy">
            <h2 id="about-title" className="serif h2 reveal" style={{ '--d': 0 }}>
              All those careers were the training.
            </h2>
            <p className="body reveal" style={{ '--d': 1 }}>
              I am an author, a classically trained chef, an event PR
              professional and a business coach. For years people called me a
              jill of all trades, and I started to believe them.
            </p>
            <p className="body reveal" style={{ '--d': 2 }}>
              Then I spent six months on St. Croix, watching the waves, and saw
              it differently. Every venture was a notch in my belt and part of
              the credibility I now bring to yours.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
