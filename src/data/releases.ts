export type Release = {
  version: string;
  build: string;
  date: string;
  title: string;
  notes: string[];
  archivePath?: string;
  appcastPath?: string;
};

export const releases: Release[] = [
  {
    version: '1.39',
    build: '42',
    date: '2026-04-09',
    title: 'Audio Router update release.',
    notes: [
      'CoreAudio restart causing helper rejecting requests for sessions created earlier fixed.',
      'UI catching driver unavailibilty fixed.',
    ],
    archivePath: '/updates/AudioRouter_1.39.zip',
    appcastPath: '/updates/appcast.xml'
  },
  {
    version: '1.38',
    build: '41',
    date: '2026-03-09',
    title: 'Audio Router update release.',
    notes: [
      'Minor bug fixes.',
      'Clock sync optimization.',
    ],
    archivePath: '/updates/AudioRouter_1.38.zip',
    appcastPath: '/updates/appcast.xml'
  },
  {
    version: '1.37',
    build: '40',
    date: '2026-27-08',
    title: 'Audio Router update release.',
    notes: [
      'Minor bug fixes.',
    ],
    archivePath: '/updates/AudioRouter_1.37.zip',
    appcastPath: '/updates/appcast.xml'
  },
  {
    version: '1.34',
    build: '37',
    date: '2026-26-08',
    title: 'Audio Router update release.',
    notes: [
      'macOS Tahoe related minor bug fixes.',
      'Driver icon fixed.',
    ],
    archivePath: '/updates/AudioRouter_1.34.zip',
    appcastPath: '/updates/appcast.xml'
  },
  {
    version: '1.30',
    build: '32',
    date: '2026-25-08',
    title: 'Audio Router update release.',
    notes: [
      'macOS Tahoe hardware device audio crackling issue fixed.',
    ],
    archivePath: '/updates/AudioRouter_1.30.zip',
    appcastPath: '/updates/appcast.xml'
  },
  {
    version: '1.29',
    build: '30',
    date: '2026-22-08',
    title: 'Audio Router update release.',
    notes: [
      'Stability improvements.',
      'Stale UID fix.',
    ],
    archivePath: '/updates/AudioRouter_1.29.zip',
    appcastPath: '/updates/appcast.xml'
  },
  {
    version: '1.28',
    build: '29',
    date: '2026-20-08',
    title: 'Audio Router update release.',
    notes: [
      'Payment processing enabled.',
    ],
    archivePath: '/updates/AudioRouter_1.28.zip',
    appcastPath: '/updates/appcast.xml'
  },
  {
    version: '1.27',
    build: '28',
    date: '2026-08-07',
    title: 'Audio Router update release.',
    notes: [
      'Mic. audio issue fixed.',
    ],
    archivePath: '/updates/AudioRouter_1.27.zip',
    appcastPath: '/updates/appcast.xml'
  },
  {
    version: '1.02',
    build: '3',
    date: '2026-08-07',
    title: 'Audio Router update release.',
    notes: [
      'Subscription and license activation disabled since payment processor not available yet.',
    ],
    archivePath: '/updates/AudioRouter_1.02.zip',
    appcastPath: '/updates/appcast.xml'
  },
  {
    version: '1.01',
    build: '2',
    date: '2026-08-07',
    title: 'Initial Audio Router release...',
    notes: [
      'Flexible routing sessions for app audio, hardware inputs, pass-through devices.',
      'Built-in driver/helper installer flow.',
      'Subscription and license activation support.'
    ],
    archivePath: '/updates/AudioRouter_1.01.zip',
    appcastPath: '/updates/appcast.xml'
  },
];

export const latestRelease = releases[0];
