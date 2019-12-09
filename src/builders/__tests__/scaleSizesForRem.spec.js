import scaleStylesForRem from '../scaleStylesForRem';

test('scaleStylesForRem', () => {
  const styles = {
    jcc: { justifyContent: 'center' },
    pa: { margin: '1rem' },
    mv: { marginTop: '0.5rem', marginBottom: '0.5rem' }
  };

  const result = {
    jcc: { justifyContent: 'center' },
    pa: { margin: 16 },
    mv: { marginTop: 8, marginBottom: 8 }
  };

  expect(scaleStylesForRem(16)(styles)).toEqual(result);
});
