import flow from 'lodash/flow';
import flowRight from 'lodash/flowRight';
import fromPairs from 'lodash/fromPairs';
import toPairs from 'lodash/toPairs';
import map from 'lodash/fp/map';
import flatMap from 'lodash/fp/flatMap';

const forEachBaseStyle = styleFn =>
  flow(
    toPairs,
    flatMap(styleFn),
    fromPairs
  );

const forEachSize = sizes => styles =>
  flow(
    toPairs,
    map(applySizeForStyle(styles))
  )(sizes);

const applySizeForStyle = ([styleKey, styleProperties]) => ([sizeKey, size]) => [
  `${styleKey}${sizeKey}`,
  applySizeForStyleProperty(styleProperties)(size)
];

const applySizeForStyleProperty = styleProperties => size =>
  flow(
    map(styleProperty => [[styleProperty], size]),
    fromPairs
  )(styleProperties);

const SizeToStylesMultiplier = flowRight(
  forEachBaseStyle,
  forEachSize
);

export default (sizes, styles) => SizeToStylesMultiplier(sizes)(styles);
