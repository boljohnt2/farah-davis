import { siteConfig } from '../lib/site';

const heroPoster = '/assets/a8f6a24383fc9c2204d8c268ea1c1933.jpg';

export default function Hero() {
  const { bookingUrl, introVideoUrl, introVideoRatio } = siteConfig;
  const hasIntroVideo = Boolean(introVideoUrl);

  return (
    <section
      className="hero"
      aria-labelledby="hero-title"
      style={{ '--vr': introVideoRatio }}
    >
      <header className="nav">
        <a className="serif brand" href="#top">
          Farah Nicole
        </a>
        <nav className="navright" aria-label="Main">
          <div className="links">
            <a href="#coaching">Coaching</a>
            <a href="#about">About</a>
            <a href="#kitchen">Kitchen</a>
            <a href="#more">More of me</a>
          </div>
          <a className="btn" href={bookingUrl} target="_blank" rel="noopener">
            Book my free 15 min
          </a>
        </nav>
      </header>

      <div className="htext">
        <span className="cf cf1" aria-hidden="true" />
        <span className="cf cf2" aria-hidden="true" />
        <span className="cf cf3" aria-hidden="true" />
        <span className="cf cf4" aria-hidden="true" />
        <span className="cf cf5" aria-hidden="true" />
        <span className="cf cf6" aria-hidden="true" />
        <h1 id="hero-title" className="serif h1 rise">
          Leave 15 minutes with{' '}
          <span className="al">
            one clear next step
            <svg
              viewBox="0 0 200 16"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path d="M3 10 C 40 2, 80 14, 130 6 S 190 8, 197 4" />
            </svg>
          </span>
          .
        </h1>
        <p className="lede rise d2">
          Tell me what is on your plate: parenting, work, your business or all
          three. We pick the one change that matters most, and I give you my
          honest read on whether coaching can help. It is free.
        </p>
        <a className="seelink rise d3" href="#coaching">
          See how I coach
        </a>
      </div>

      <a
        className="badge"
        href={bookingUrl}
        target="_blank"
        rel="noopener"
        aria-label="Book my free 15 min"
      >
        <svg className="ring" viewBox="0 0 160 160" aria-hidden="true">
          <defs>
            <path
              id="ringpath"
              d="M 80 80 m -57 0 a 57 57 0 1 1 114 0 a 57 57 0 1 1 -114 0"
            />
          </defs>
          <text>
            <textPath href="#ringpath" textLength="352" lengthAdjust="spacing">
              Book my free 15 min · Book my free 15 min ·
            </textPath>
          </text>
        </svg>
        <span className="core" aria-hidden="true">
          ↗
        </span>
      </a>

      <div className="hphoto">
        {hasIntroVideo ? (
          <video
            src={introVideoUrl}
            poster={heroPoster}
            controls
            playsInline
            preload="metadata"
          />
        ) : (
          <>
            <img
              src={heroPoster}
              alt="Farah Nicole smiling at the camera in a black and pink floral top"
            />
            <button
              className="play"
              type="button"
              aria-label="Play intro video from Farah"
            >
              <span className="tri" />
            </button>
          </>
        )}
      </div>
    </section>
  );
}
