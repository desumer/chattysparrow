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
  }
];

export const latestRelease = releases[0];
