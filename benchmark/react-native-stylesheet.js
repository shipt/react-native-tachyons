import * as React from 'react';
import data from './data.json';

function randomize(arr) {
  return [...arr, ...arr, ...arr]
    .map(item => ({ item, key: Math.random(1) }))
    .sort((a, b) => a.key < b.key)
    .map(i => i.item);
}

const StyleSheet = {
  base: {
    color: 'blue',
    backgroundColor: 'pink',
    flex: '1',
    flexWrap: 'wrap'
  },
  ul: {
    flex: '1',
    justifyCenter: 'space-between',
    alignItems: 'flex-end',
    backgroundColor: 'blue',
    color: 'yellow'
  },
  item: {
    flex: '1',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue'
  }
};

const randomizedData = randomize(data.items);

export default function() {
  return <App items={randomizedData} />;
}

class App extends React.Component {
  render() {
    return (
      <div style={StyleSheet.base}>
        <ItemList items={this.props.items} />
      </div>
    );
  }
}

const ItemList = ({ items }) => (
  <ul style={StyleSheet.ul}>
    {items.map((item, index) => (
      <Item color={item} key={index} />
    ))}
  </ul>
);

const style = {
  borderColor: 'pink'
};

const cacheStyle = [StyleSheet.item, style];

const Item = ({ color }) => (
  <li style={cacheStyle}>
    <div style={{ color }}>{color}</div>
  </li>
);
