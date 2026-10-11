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

// Cooking reels. Each reel is a segment of one YouTube video, played inside the
// card. `start` and `end` are in seconds; set them to the moment you want to show.
// Placeholder times (0 to 30 seconds) are used until you choose the real ones.
export const cookingClips = [
  {
    id: 'r1',
    youtubeId: '9CGRN_O8VJg',
    start: 0,
    end: 30,
    poster: '/assets/b34c0d711ad905a1a527cf7bf8ae47a4.jpg',
    alt: 'Farah smiling with a glass in hand',
  },
  {
    id: 'r2',
    youtubeId: 'j_iWySOxD2s',
    start: 0,
    end: 30,
    poster: '/assets/0502d8d883763c5d94eb706e40e06709.jpg',
    alt: 'Fresh flowers, a glass jug and a champagne bottle on a bar cart',
  },
  {
    id: 'r3',
    youtubeId: 'zGsWAA0B0BQ',
    start: 0,
    end: 30,
    poster: '/assets/3302ce1f0cf557e6bafee3137d47db98.jpg',
    alt: 'A bucket of lemons and a jug on a gold bar cart',
  },
  {
    id: 'r4',
    youtubeId: '516FdDJkMuA',
    start: 0,
    end: 30,
    poster: '/assets/110d3d196aaf7fb49a8240a61b7ecdab.jpg',
    alt: 'Close portrait of Farah smiling',
  },
];
