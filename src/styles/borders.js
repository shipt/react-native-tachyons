import SizeByStyleMultiplier from './util/sizeByStyleMultiplier';

const sizes = {
  0: '0rem',
  1: '0.25rem',
  2: '0.5rem',
  3: '1rem',
  4: '2rem',
  5: '4rem',
  6: '8rem',
  7: '16rem',
  8: '32rem'
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
