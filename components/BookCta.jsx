import { siteConfig } from '../lib/site';

export default function BookCta() {
  const { bookingUrl } = siteConfig;

  return (
    <section id="book" className="final" aria-labelledby="book-title">
      <div className="wrap">
        <h2 id="book-title" className="serif mega reveal">
          Start with 15 minutes.
        </h2>
        <div className="fgrid">
          <div className="reveal">
            <p className="lead">
              Tell me what is on your plate. I will tell you plainly whether
              coaching can help.
            </p>
            <div className="fcta">
              <a
                className="btn btn-solid"
                href={bookingUrl}
                target="_blank"
                rel="noopener"
              >
                Book my free 15 min
              </a>
              <span className="serif note">It's on me</span>
            </div>
          </div>
          <ul className="goes">
            <li className="reveal">
              <b>You talk.</b>Parenting, work, your business, or all three.
              Whatever is loudest right now.
            </li>
            <li className="reveal">
              <b>We pick one thing.</b>The change that would make the biggest
              difference first.
            </li>
            <li className="reveal">
              <b>I give you my honest read.</b>If I can help, I will say how. If
              not, you leave with a clearer plan.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
