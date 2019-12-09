import * as React from 'react';
import NativeTachyons from 'react-native-style-tachyons';

import data from './data.json';

NativeTachyons.build({}, { create: x => x });

function randomize(arr) {
  return [...arr, ...arr, ...arr]
    .map(item => ({ item, key: Math.random(1) }))
    .sort((a, b) => a.key < b.key)
    .map(i => i.item);
}

const randomizedData = randomize(data.items);

export default function() {
  return <App items={randomizedData} />;
}

const App = NativeTachyons.wrap(
  class Container extends React.Component {
    render() {
      return (
        <div cls="blue bg-pink flx-i flx-wrap">
          <ItemList items={this.props.items} />
        </div>
      );
    }
  }
);

const ItemList = NativeTachyons.wrap(({ items }) => (
  <ul cls="flx-i jcsb aife b--pink bg-blue yellow">
    {items.map((item, index) => (
      <Item color={item} key={index} />
    ))}
  </ul>
));

const style = {
  borderColor: 'pink'
};

const Item = NativeTachyons.wrap(({ color }) => {
  return (
    <li cls="flx-i jcc aic bg-blue" style={style}>
      <div cls={color}>{color}</div>
    </li>
  );
});
