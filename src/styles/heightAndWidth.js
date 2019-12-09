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

const percentages = {
  5: '5%',
  10: '10%',
  15: '15%',
  20: '20%',
  25: '25%',
  30: '30%',
  35: '35%',
  40: '40%',
  45: '45%',
  50: '50%',
  55: '55%',
  60: '60%',
  65: '65%',
  70: '70%',
  75: '75%',
  80: '80%',
  85: '85%',
  90: '90%',
  95: '95%',
  100: '100%'
};

const baseStyles = {
  w: ['width'],
  h: ['height'],
  'min-w': ['minWidth'],
  'min-h': ['minHeight'],
  'max-w': ['maxWidth'],
  'max-h': ['maxHeight']
};

const basePercentageStyles = {
  wp: ['width'],
  hp: ['height'],
  'min-wp': ['minWidth'],
  'min-hp': ['minHeight'],
  'max-wp': ['maxWidth'],
  'max-hp': ['maxHeight']
};

export default {
  ...SizeByStyleMultiplier(sizes, baseStyles),
  ...SizeByStyleMultiplier(percentages, basePercentageStyles)
};
