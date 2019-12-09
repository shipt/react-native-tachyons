import generateColorPalette from './builders/generateColorPalette';
import scaleStylesForRem from './builders/scaleStylesForRem';
import flexStyles from './styles/flexBox';
import Spacing from './styles/spacing';
import Images from './styles/images';
import Opacity from './styles/opacity';
import Absolute from './styles/absolute';
import HeightAndWidth from './styles/heightAndWidth';
import Borders from './styles/borders';
import Overflow from './styles/overflow';
import AspectRatio from './styles/aspectRatio';
import Text from './styles/text';
import merge from 'lodash/merge';
import { DEFAULT_REM_SIZE } from './constants/constants';

const DEFAULT_CONFIG = {
  rem: DEFAULT_REM_SIZE,
  colors: {},
  styles: {}
};

const formatStyles = ({ rem }) => scaleStylesForRem(rem);

const createStyles = config => ({
  ...Spacing,
  ...Images,
  ...Opacity,
  ...flexStyles,
  ...Absolute,
  ...HeightAndWidth,
  ...Borders,
  ...Overflow,
  ...AspectRatio,
  ...Text,
  ...generateColorPalette(config.colors),
  ...config.styles
});

export function createAndFormatStyles(config) {
  return formatStyles(config)(createStyles(config));
}

export function build(userConfig) {
  const mergedConfig = merge(DEFAULT_CONFIG, userConfig);
  return createAndFormatStyles(mergedConfig);
}
