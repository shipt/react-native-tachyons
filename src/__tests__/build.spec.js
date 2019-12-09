import { getterFactory } from '../styleGetter';
import { build, createAndFormatStyles } from '../build';

const defaultConfig = { rem: 5 };

const getStyler = (config = defaultConfig) => {
  let state = {};
  const styler = getterFactory(state);
  state.styles = build(config);
  return styler;
};

test('style getter', () => {
  const styler = getStyler();

  expect(styler('blue jcc flx-i ma5')).toEqual([
    { color: '#0000ff' },
    { justifyContent: 'center' },
    { flex: 1 },
    { margin: 20 }
  ]);

  expect(() => styler('owen-is-a-noob')).toThrowError(
    'Unknown style key: owen-is-a-noob. Check your spelling. If this is a custom style be sure to build it.'
  );
});

test('default styles', () => {
  const config = { rem: 16 };

  const styles = createAndFormatStyles(config);

  expect(styles).toMatchSnapshot();
});

test('parses hex colors', () => {
  const styler = getStyler();

  expect(styler('#123456 bg-#123456 b--#123456 jcc flx-i ma5')).toEqual([
    { color: '#123456' },
    { backgroundColor: '#123456' },
    { borderColor: '#123456' },
    { justifyContent: 'center' },
    { flex: 1 },
    { margin: 20 }
  ]);
});
