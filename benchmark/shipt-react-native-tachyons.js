import * as React from 'react';
import { T } from '../src';
import data from './data.json';

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

class App extends React.Component {
  render() {
    return (
      <div style={T('blue bg-pink flx-i flx-wrap')}>
        <ItemList items={this.props.items} />
      </div>
    );
  }
}

const ItemList = ({ items }) => (
  <ul style={T('flx-i jcsb aife b--pink bg-blue yellow')}>
    {items.map((item, index) => (
      <Item color={item} key={index} />
    ))}
  </ul>
);

const style = {
  borderColor: 'pink'
};

const Item = ({ color }) => (
  <li style={[...T('flx-i jcc aic bg-blue'), style]}>
    <div style={T(color)}>{color}</div>
  </li>
);
