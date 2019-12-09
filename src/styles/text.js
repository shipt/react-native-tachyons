import SizeByStyleMultiplier from './util/sizeByStyleMultiplier';

const fontSizes = {
  1: '0.875rem',
  2: '1rem',
  3: '1.25rem',
  4: '1.5rem',
  5: '2.25rem',
  6: '3rem'
};

const fontSizeStyles = {
  f: ['fontSize']
};

const fontWeightSizes = {
  1: '100',
  2: '200',
  3: '300',
  4: '400',
  5: '500',
  6: '600',
  7: '700',
  8: '800',
  9: '900'
};

const fontWeightStyles = {
  fw: ['fontWeight']
};

export default {
  ...SizeByStyleMultiplier(fontSizes, fontSizeStyles),
  'f-headline': { fontSize: '6rem' },
  'f-subheadline': { fontSize: '5rem' },
  normal: { fontWeight: 'normal' },
  bold: { fontWeight: 'bold' },
  italic: { fontStyle: 'italic' },
  ...SizeByStyleMultiplier(fontWeightSizes, fontWeightStyles),
  tl: { textAlign: 'left' },
  tc: { textAlign: 'center' },
  tr: { textAlign: 'right' },
  tj: { textAlign: 'justify' },
  'lh-solid': { lineHeight: '1rem' },
  'lh-title': { lineHeight: '1.25rem' },
  'lh-copy': { lineHeight: '1.5rem' },
  tracked: { letterSpacing: '0.1rem' },
  'tracked-tight': { letterSpacing: '-0.05rem' },
  'tracked-mega': { letterSpacing: '0.25rem' },
  'no-underline': { textDecorationLine: 'none' },
  strike: { textDecorationLine: 'line-through' },
  underline: { textDecorationLine: 'underline' },
  'strike-underline': { textDecorationLine: 'underline line-through' },
  ttu: { textTransform: 'uppercase' },
  ttl: { textTransform: 'lowercase' },
  ttc: { textTransform: 'capitalize' }
};
