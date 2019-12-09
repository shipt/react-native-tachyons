import SizeByStyleMultiplier from './util/sizeByStyleMultiplier';

const sizes = {
  '2/1': 2 / 1,
  '5/3': 5 / 3,
  '3/2': 3 / 2,
  '4/3': 4 / 3,
  '1': 1,
  '3/4': 3 / 4,
  '2/3': 2 / 3,
  '3/5': 3 / 5,
  '1/2': 1 / 2
};

const baseStyles = {
  'ar-': ['aspectRatio']
};

export default SizeByStyleMultiplier(sizes, baseStyles);
