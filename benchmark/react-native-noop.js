import * as React from 'react';
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
      <div>
        <ItemList items={this.props.items} />
      </div>
    );
  }
}

const ItemList = ({ items }) => (
  <ul>
    {items.map((item, index) => (
      <Item color={item} key={index} />
    ))}
  </ul>
);

const Item = ({ color }) => (
  <li>
    <div>{color}</div>
  </li>
);
