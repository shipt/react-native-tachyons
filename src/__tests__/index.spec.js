import { T, build } from '../';

describe('index.js', () => {
  beforeAll(() => jest.resetModules());

  const config = { rem: 5 };

  build(config);

  it('exports a cached function', () => {
    const expected = [{ flex: 1 }, { width: 300 }, { height: 300 }];
    const result1 = T('flx-i', { width: 300 }, { height: 300 });
    const result2 = T('flx-i', { width: 300 }, { height: 300 });
    expect(result1).toEqual(expected);
    expect(result2).toBe(result1);
  });
});
