import SizeByStyleMultiplier from '../sizeByStyleMultiplier';

test('combine sizes and styles', () => {
  const sizes = {
    0: 0,
    1: 0.25,
    2: 'hello'
  };

  const styles = {
    ma: ['margin'],
    ph: ['paddingLeft', 'paddingRight'],
    'max-w': ['maxWidth']
  };

  const result = {
    ma0: {
      margin: 0
    },
    ma1: {
      margin: 0.25
    },
    ma2: {
      margin: 'hello'
    },
    ph0: {
      paddingLeft: 0,
      paddingRight: 0
    },
    ph1: {
      paddingLeft: 0.25,
      paddingRight: 0.25
    },
    ph2: {
      paddingLeft: 'hello',
      paddingRight: 'hello'
    },
    'max-w0': {
      maxWidth: 0
    },
    'max-w1': {
      maxWidth: 0.25
    },
    'max-w2': {
      maxWidth: 'hello'
    }
  };

  expect(SizeByStyleMultiplier(sizes, styles)).toEqual(result);
});
