import cached from 'micro-memoize';
import { getterFactory } from './styleGetter';
import { build as _build } from './build';
import { deepEqual } from 'fast-equals';
import { MAX_CACHE_SIZE } from './constants/constants';

export { styled } from './styled';

let state = {
  styles: _build({})
};

const getStyles = getterFactory(state);

const cacheConfig = {
  isEqual: deepEqual,
  maxSize: MAX_CACHE_SIZE
};

export const T = cached((cls, ...rest) => [...getStyles(cls), ...rest], cacheConfig);
export const build = (userConfig = {}) => {
  state.styles = _build(userConfig);
};
