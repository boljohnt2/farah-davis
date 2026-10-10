export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="foot">
          <div className="reveal" style={{ '--d': 0 }}>
            <a className="serif fbrand" href="#top">
              Farah Nicole
            </a>
            <p>
              Life coach, chef, author and founder of Pivot and Pop PR.
            </p>
          </div>
          <div className="reveal" style={{ '--d': 1 }}>
            <h3>Explore</h3>
            <ul>
              <li>
                <a href="#coaching">Coaching</a>
              </li>
              <li>
                <a href="#about">About Farah</a>
              </li>
              <li>
                <a href="#kitchen">The kitchen</a>
              </li>
            </ul>
          </div>
          <div className="reveal" style={{ '--d': 2 }}>
            <h3>Elsewhere</h3>
            <ul>
              <li>
                <a
                  href="https://www.pivotandpoppr.com"
                  target="_blank"
                  rel="noopener"
                >
                  Pivot and Pop PR
                </a>
              </li>
              <li>
                <a
                  href="https://www.pivotandpoppr.com/category/all-products"
                  target="_blank"
                  rel="noopener"
                >
                  The shop
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/pivotandpoppr/"
                  target="_blank"
                  rel="noopener"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/farahnicole-davids-050756253/"
                  target="_blank"
                  rel="noopener"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://web.facebook.com/people/Pivot-and-Pop-PR/61559087970911/"
                  target="_blank"
                  rel="noopener"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://x.com/pivotandpoppr"
                  target="_blank"
                  rel="noopener"
                >
                  X
                </a>
              </li>
            </ul>
          </div>
          <div className="reveal" style={{ '--d': 3 }}>
            <h3>Say hello</h3>
            <ul>
              <li>farahnicole@pivotandpoppr.com</li>
              <li>689-224-0918</li>
            </ul>
          </div>
        </div>
        <p className="legal">© 2026 Farah Nicole. All rights reserved.</p>
      </div>
      <p className="serif wordmark" aria-hidden="true">
        Farah Nicole
      </p>
    </footer>
  );
}
