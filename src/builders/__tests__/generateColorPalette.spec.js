import generateColorPalette from '../generateColorPalette';

test('generateColorPalette', () => {
  const userPalette = { 'owens-stupid-face': 'test' };

  const generated = generateColorPalette(userPalette);

  expect(generated['rebeccapurple']).toEqual({ color: '#663399' });
  expect(generated['bg-rebeccapurple']).toEqual({ backgroundColor: '#663399' });
  expect(generated['b--rebeccapurple']).toEqual({ borderColor: '#663399' });

  expect(generated['owens-stupid-face']).toEqual({ color: 'test' });
  expect(generated['bg-owens-stupid-face']).toEqual({ backgroundColor: 'test' });
  expect(generated['b--owens-stupid-face']).toEqual({ borderColor: 'test' });
});
