import { buildLegacyTheme } from 'sanity';

const props = {
  '--my-white': '#fff',
  '--my-black': '#1a1a1a',
  '--kultura-brand': '#F7AB0A',
  '--my-red': '#DB4437',
  '--my-yellow': '#F4B400',
  '--my-green': '#0F9D58',
};

export const myTheme = buildLegacyTheme({
  // Base theme color
  '--black': props['--my-black'],
  '--white': props['--my-white'],

  '--gray': '#666',
  '--gray-base': '#666',

  '--component-bg': props['--my-black'],
  '--component-text-color': props['--my-white'],

  // Brand
  '--brand-primary': props['--kultura-brand'],

  // Default button
  '--default-button-color': '#666',
  '--default-button-primary-color': props['--kultura-brand'],
  '--default-button-success-color': props['--my-green'],
  '--default-button-warning-color': props['--my-yellow'],
  '--default-button-danger-color': props['--my-red'],

  // state
  '--state-info-color': props['--kultura-brand'],
  '--state-success-color': props['--my-green'],
  '--state-danger-color': props['--my-red'],
  '--state-warning-color': props['--my-yellow'],

  // Navbar
  '--main-navigation-color': props['--my-black'],
  '--main-navigation-color--inverted': props['--my-white'],

  '--focus-color': props['--kultura-brand'],
});
