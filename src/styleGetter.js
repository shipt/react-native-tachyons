import invariant from 'invariant';

const SPLIT_VAL = ' ';

const colorKeys = {
  'bg-': 'backgroundColor',
  'b--': 'borderColor'
};

const isColor = tachyon => ['#', 'rgb(', 'rgba('].some(text => tachyon.includes(text));
const getColorStyle = tachyon =>
  tachyon.startsWith('b') ? { [colorKeys[tachyon.slice(0, 3)]]: tachyon.slice(3) } : { color: tachyon };

export const getterFactory = state => tachyonText => {
  invariant(state.styles, `Can't get styles until Build function is called`);

  return tachyonText.split(SPLIT_VAL).reduce((arr, tachyon) => {
    const key = tachyon.replace(/(\r\n|\n|\r)/gm, '');
    let style;

    if (!key) return arr;

    if (isColor(tachyon)) {
      style = getColorStyle(tachyon);
    } else {
      style = state.styles[key];
      invariant(
        style,
        `Unknown style key: ${key}. Check your spelling. If this is a custom style be sure to build it.`
      );
    }

    return [...arr, style];
  }, []);
};
