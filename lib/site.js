// Site configuration. Each value can be overridden at build time with
// environment variables so the deployed site stays editable without code changes.

export const siteConfig = {
  // The mockup's default booking target for the free 15-minute session.
  bookingUrl:
    process.env.NEXT_PUBLIC_BOOKING_URL ||
    'https://www.pivotandpoppr.com/let-s-pop',
  // Drop the intro video URL here (or set NEXT_PUBLIC_INTRO_VIDEO_URL).
  // While empty, the hero shows the poster frame with a play button.
  introVideoUrl: (process.env.NEXT_PUBLIC_INTRO_VIDEO_URL || '').trim(),
  // Hero video frame ratio on mobile: "4 / 5" | "16 / 9" | "9 / 16".
  introVideoRatio: process.env.NEXT_PUBLIC_INTRO_VIDEO_RATIO || '4 / 5',
};

// Cooking reels: random highlight segments from the four YouTube videos.
// Each clip plays muted and loops between `start` and `end` (seconds).
// Five clips per video. Shuffled once with a fixed seed so the order is stable.
export const cookingClips = [
  {
    id: 'v2-c5',
    youtubeId: 'j_iWySOxD2s',
    start: 1,
    end: 7,
  },
  {
    id: 'v4-c5',
    youtubeId: '516FdDJkMuA',
    start: 194,
    end: 229,
  },
  {
    id: 'v1-c5',
    youtubeId: '9CGRN_O8VJg',
    start: 143,
    end: 174,
  },
  {
    id: 'v1-c4',
    youtubeId: '9CGRN_O8VJg',
    start: 229,
    end: 257,
  },
  {
    id: 'v4-c3',
    youtubeId: '516FdDJkMuA',
    start: 95,
    end: 116,
  },
  {
    id: 'v4-c1',
    youtubeId: '516FdDJkMuA',
    start: 123,
    end: 156,
  },
  {
    id: 'v3-c4',
    youtubeId: 'zGsWAA0B0BQ',
    start: 23,
    end: 43,
  },
  {
    id: 'v2-c3',
    youtubeId: 'j_iWySOxD2s',
    start: 12,
    end: 21,
  },
  {
    id: 'v2-c1',
    youtubeId: 'j_iWySOxD2s',
    start: 26,
    end: 32,
  },
  {
    id: 'v1-c3',
    youtubeId: '9CGRN_O8VJg',
    start: 303,
    end: 323,
  },
  {
    id: 'v3-c5',
    youtubeId: 'zGsWAA0B0BQ',
    start: 56,
    end: 80,
  },
  {
    id: 'v4-c4',
    youtubeId: '516FdDJkMuA',
    start: 291,
    end: 316,
  },
  {
    id: 'v2-c2',
    youtubeId: 'j_iWySOxD2s',
    start: 37,
    end: 43,
  },
  {
    id: 'v3-c2',
    youtubeId: 'zGsWAA0B0BQ',
    start: 32,
    end: 60,
  },
  {
    id: 'v4-c2',
    youtubeId: '516FdDJkMuA',
    start: 329,
    end: 351,
  },
  {
    id: 'v3-c1',
    youtubeId: 'zGsWAA0B0BQ',
    start: 65,
    end: 99,
  },
  {
    id: 'v1-c2',
    youtubeId: '9CGRN_O8VJg',
    start: 94,
    end: 123,
  },
  {
    id: 'v2-c4',
    youtubeId: 'j_iWySOxD2s',
    start: 20,
    end: 29,
  },
  {
    id: 'v1-c1',
    youtubeId: '9CGRN_O8VJg',
    start: 273,
    end: 298,
  },
  {
    id: 'v3-c3',
    youtubeId: 'zGsWAA0B0BQ',
    start: 50,
    end: 80,
  },
];
