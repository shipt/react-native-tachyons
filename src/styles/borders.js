import SizeByStyleMultiplier from './util/sizeByStyleMultiplier';

const sizes = {
  0: '0rem',
  1: '0.125rem',
  2: '0.25rem',
  3: '0.5rem',
  4: '0.75rem',
  5: '1rem',
  6: '2rem',
  7: '4rem',
  8: '8rem',
  9: '16rem',
  10: '32rem'
};

const baseStyles = {
  br: ['borderRadius']
};

export default {
  ...SizeByStyleMultiplier(sizes, baseStyles),
  ba: { borderWidth: 1 },
  bl: { borderLeftWidth: 1 },
  br: { borderRightWidth: 1 },
  bt: { borderTopWidth: 1 },
  bb: { borderBottomWidth: 1 }
};
