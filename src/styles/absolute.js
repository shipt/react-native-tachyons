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
  'top-': ['top'],
  'bottom-': ['bottom'],
  'left-': ['left'],
  'right-': ['right']
};

export default {
  absolute: { position: 'absolute' },
  'absolute-fill': { position: 'absolute', top: 0, left: 0, bottom: 0, right: 0 },
  ...SizeByStyleMultiplier(sizes, baseStyles)
};
