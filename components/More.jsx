export default function More() {
  return (
    <section id="more" className="more" aria-labelledby="more-title">
      <div className="wrap sec">
        <div className="sechead reveal">
          <h2 id="more-title" className="serif h2">
            More ways to spend time with me.
          </h2>
        </div>
        <ul className="rows">
          <li className="reveal">
            <a className="row" href="#kitchen">
              <span className="rhead">
                <img
                  className="av"
                  src="/assets/d53b3fd3794bfed20bf3684a430b3d25.jpg"
                  alt=""
                  loading="lazy"
                />
                <span className="serif rt">The kitchen</span>
              </span>
              <p>I trained as a chef and still cook like one. Watch the show.</p>
              <span className="go">
                Watch the clips <span aria-hidden="true">↗</span>
              </span>
            </a>
          </li>
          <li className="reveal">
            <a className="row" href="#more">
              <span className="rhead">
                <img
                  className="av"
                  src="/assets/93acc881efcabbbdc76b486f32e43fdf.jpg"
                  alt=""
                  loading="lazy"
                />
                <span className="serif rt">The podcast</span>
              </span>
              <p>
                Conversations on parenting, work and building something of your
                own.
              </p>
              <span className="go">
                Listen in <span aria-hidden="true">↗</span>
              </span>
            </a>
          </li>
          <li className="reveal">
            <a
              className="row"
              href="https://www.pivotandpoppr.com"
              target="_blank"
              rel="noopener"
            >
              <span className="rhead">
                <img
                  className="av"
                  src="/assets/a2610440e9cf5a7acdab1dcd39be12db.jpg"
                  alt=""
                  loading="lazy"
                />
                <span className="serif rt">Pivot and Pop PR</span>
              </span>
              <p>
                Event PR for launches, conferences and entertainment, plus
                business consulting.
              </p>
              <span className="go">
                Visit the agency <span aria-hidden="true">↗</span>
              </span>
            </a>
          </li>
          <li className="reveal">
            <a
              className="row"
              href="https://www.pivotandpoppr.com/let-s-pivot"
              target="_blank"
              rel="noopener"
            >
              <span className="rhead">
                <img
                  className="av"
                  src="/assets/ec79a1aa63b895985e89dfc7dfde4561.jpg"
                  alt=""
                  loading="lazy"
                />
                <span className="serif rt">Talks and workshops</span>
              </span>
              <p>Speaking, workshops and retreats for teams and communities.</p>
              <span className="go">
                See what I offer <span aria-hidden="true">↗</span>
              </span>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
