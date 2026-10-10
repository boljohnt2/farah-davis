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

// Cooking clips. Add each clip's video link in `video`; `poster` stands in until then.
export const cookingClips = [
  {
    id: 'r1',
    poster: '/assets/b34c0d711ad905a1a527cf7bf8ae47a4.jpg',
    video: '',
    alt: 'Farah smiling with a glass in hand',
  },
  {
    id: 'r2',
    poster: '/assets/0502d8d883763c5d94eb706e40e06709.jpg',
    video: '',
    alt: 'Fresh flowers, a glass jug and a champagne bottle on a bar cart',
  },
  {
    id: 'r3',
    poster: '/assets/3302ce1f0cf557e6bafee3137d47db98.jpg',
    video: '',
    alt: 'A bucket of lemons and a jug on a gold bar cart',
  },
  {
    id: 'r4',
    poster: '/assets/110d3d196aaf7fb49a8240a61b7ecdab.jpg',
    video: '',
    alt: 'Close portrait of Farah smiling',
  },
  {
    id: 'r5',
    poster: '/assets/c8ee6ba8c96cf2c42222de1af94360cb.jpg',
    video: '',
    alt: 'Farah laughing on a grey sofa with a teal cushion',
  },
  {
    id: 'r6',
    poster: '/assets/32ec3630f4a85da50f186a19bb66dc00.jpg',
    video: '',
    alt: 'Peonies in a gold vase beside a side table with notebooks',
  },
];
