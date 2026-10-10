'use client';

import { useRef, useState } from 'react';
import { cookingClips } from '../lib/site';

export default function Kitchen() {
  const trackRef = useRef(null);
  const [playing, setPlaying] = useState(null);

  const slide = (dir) => () => {
    const track = trackRef.current;
    if (!track) return;
    const reduce =
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    track.scrollBy({ left: dir * 308, behavior: reduce ? 'auto' : 'smooth' });
  };

  const reels = cookingClips.map((c, i) => ({
    ...c,
    label: 'Play cooking clip ' + (i + 1),
    isPlaying: playing === c.id && !!c.video,
    notPlaying: !(playing === c.id && !!c.video),
    play: () => {
      if (c.video) setPlaying(c.id);
    },
  }));

  return (
    <section
      id="kitchen"
      className="kitchen"
      data-reels="1"
      aria-labelledby="kitchen-title"
    >
      <div className="wrap khead">
        <div className="sechead reveal">
          <h2 id="kitchen-title" className="serif h2">
            Watch me cook.
          </h2>
          <p className="body">Short clips from my cooking show. Tap one to watch.</p>
        </div>
        <div className="arrows reveal" style={{ '--d': 1 }}>
          <button
            className="btn arrowbtn"
            type="button"
            aria-label="Previous clips"
            onClick={slide(-1)}
          >
            ←
          </button>
          <button
            className="btn arrowbtn"
            type="button"
            aria-label="Next clips"
            onClick={slide(1)}
          >
            →
          </button>
        </div>
      </div>
      <div
        className="track"
        data-track="1"
        tabIndex={0}
        role="region"
        aria-label="Cooking clips, scroll sideways"
        ref={trackRef}
      >
        {reels.map((reel) => (
          <article className="reel" key={reel.id}>
            {reel.isPlaying ? (
              <video
                src={reel.video}
                poster={reel.poster}
                autoPlay
                controls
                playsInline
              />
            ) : (
              <>
                <img src={reel.poster} alt={reel.alt} />
                <button
                  className="rplay"
                  type="button"
                  aria-label={reel.label}
                  onClick={reel.play}
                >
                  <span className="tri" />
                </button>
              </>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
