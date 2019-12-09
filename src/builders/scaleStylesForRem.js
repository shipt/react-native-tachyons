import flow from 'lodash/flow';
import times from 'lodash/times';
import fromPairs from 'lodash/fromPairs';
import toPairs from 'lodash/toPairs';
import map from 'lodash/fp/map';

const valueMapper = fn => ([key, value]) => [key, fn(value)];

const mapObjectValues = fn =>
  flow(
    toPairs,
    map(valueMapper(fn)),
    fromPairs
  );

const mapNestedObjectValues = levelCount => {
  const fns = times(levelCount, () => mapObjectValues);
  return flow(...fns);
};

const scaleValueForRem = size => stylePropValue => {
  if (!stylePropValue) return stylePropValue;
  if (typeof stylePropValue !== 'string') return stylePropValue;
  if (!stylePropValue.endsWith('rem')) return stylePropValue;

  return Number.parseFloat(stylePropValue) * size;
};

const scaleStylesForRem = flow(
  scaleValueForRem,
  mapNestedObjectValues(2) // map values 2 levels deep
);

export default scaleStylesForRem;
