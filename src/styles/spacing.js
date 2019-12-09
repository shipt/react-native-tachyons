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
  ma: ['margin'],
  ml: ['marginLeft'],
  mr: ['marginRight'],
  mt: ['marginTop'],
  mb: ['marginBottom'],
  mv: ['marginTop', 'marginBottom'],
  mh: ['marginLeft', 'marginRight'],
  pa: ['padding'],
  pl: ['paddingLeft'],
  pr: ['paddingRight'],
  pt: ['paddingTop'],
  pb: ['paddingBottom'],
  pv: ['paddingTop', 'paddingBottom'],
  ph: ['paddingLeft', 'paddingRight']
};

export default SizeByStyleMultiplier(sizes, baseStyles);
