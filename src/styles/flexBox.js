import SizeByStyleMultiplier from './util/sizeByStyleMultiplier';

const flexBasisValues = {
  0: '0rem',
  1: '0.25rem',
  2: '0.5rem',
  3: '1rem',
  4: '2rem',
  5: '4rem',
  6: '8rem',
  7: '16rem',
  8: '32rem'
};

const flexGrowValues = {
  '1': 1,
  '2': 2,
  '3': 3,
  '4': 4,
  '5': 5,
  '6': 6,
  '7': 7,
  '8': 8,
  '9': 9,
  '10': 10,
  '11': 11,
  '12': 12
};

const flexBasis = {
  'flx-b-': ['flexBasis']
};

const flexGrow = {
  'flx-g-': ['flexGrow']
};

export default {
  'flx-i': { flex: 1 },
  'flx-row': { flexDirection: 'row' },
  'flx-row-reverse': { flexDirection: 'row-reverse' },
  'flx-col-reverse': { flexDirection: 'column-reverse' },
  'flx-wrap': { flexWrap: 'wrap' },
  aifs: { alignItems: 'flex-start' },
  aic: { alignItems: 'center' },
  aib: { alignItems: 'baseline' },
  aife: { alignItems: 'flex-end' },
  jcc: { justifyContent: 'center' },
  jcfe: { justifyContent: 'flex-end' },
  jcsb: { justifyContent: 'space-between' },
  jcsa: { justifyContent: 'space-around' },
  asfs: { alignSelf: 'flex-start' },
  asfe: { alignSelf: 'flex-end' },
  asc: { alignSelf: 'center' },
  ass: { alignSelf: 'stretch' },
  asb: { alignSelf: 'baseline' },
  ...SizeByStyleMultiplier(flexBasisValues, flexBasis),
  ...SizeByStyleMultiplier(flexGrowValues, flexGrow)
};
