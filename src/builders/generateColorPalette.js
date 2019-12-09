import defaultColors from '../styles/color';

export default function GenerateColorPalette(userColorPalette = {}) {
  const palette = {
    ...defaultColors,
    ...userColorPalette
  };

  let styles = {};

  Object.keys(palette).forEach(colorKey => {
    styles[colorKey] = { color: palette[colorKey] };
    styles[`bg-${colorKey}`] = { backgroundColor: palette[colorKey] };
    styles[`b--${colorKey}`] = { borderColor: palette[colorKey] };
  });

  return styles;
}
