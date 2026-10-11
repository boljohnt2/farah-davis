'use client';

import { useEffect, useRef, useState } from 'react';
import { cookingClips } from '../lib/site';

// Muted, looping, autoplaying embed of one highlight between start and end.
// `playlist` set to the same video id is what makes YouTube loop a segment.
function youtubeSrc({ youtubeId, start, end }) {
  const params = new URLSearchParams({
    autoplay: '1',
    mute: '1',
    loop: '1',
    playlist: youtubeId,
    playsinline: '1',
    rel: '0',
    modestbranding: '1',
    start: String(start),
    end: String(end),
  });
  return `https://www.youtube-nocookie.com/embed/${youtubeId}?${params}`;
}

// A reel loads its player once it is near the visible part of the track.
function Reel({ clip, label }) {
  const ref = useRef(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || active) return undefined;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          io.disconnect();
        }
      },
      { root: el.closest('.track'), rootMargin: '0px 300px' }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [active]);

  return (
    <article className="reel" ref={ref}>
      {active ? (
        <iframe
          src={youtubeSrc(clip)}
          title={label}
          allow="autoplay; encrypted-media; picture-in-picture"
          allowFullScreen
        />
      ) : null}
    </article>
  );
}

export default function Kitchen() {
  const trackRef = useRef(null);

  const slide = (dir) => () => {
    const track = trackRef.current;
    if (!track) return;
    const reduce =
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const card = track.querySelector('.reel');
    const step = card ? card.offsetWidth + 28 : 308;
    track.scrollBy({ left: dir * step, behavior: reduce ? 'auto' : 'smooth' });
  };

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
        {cookingClips.map((clip, i) => (
          <Reel
            key={clip.id}
            clip={clip}
            label={'Cooking highlight ' + (i + 1)}
          />
        ))}
      </div>
    </section>
  );
}
