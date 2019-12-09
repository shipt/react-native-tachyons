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
