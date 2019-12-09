import SizeByStyleMultiplier from './util/sizeByStyleMultiplier';

const sizes = {
  0: 0,
  '025': 0.025,
  '05': 0.05,
  '10': 0.1,
  '20': 0.2,
  '25': 0.25,
  '30': 0.3,
  '40': 0.4,
  '50': 0.5,
  '60': 0.6,
  '70': 0.7,
  '75': 0.75,
  '80': 0.8,
  '90': 0.9
};

const baseStyles = {
  'o-': ['opacity']
};

export default SizeByStyleMultiplier(sizes, baseStyles);
