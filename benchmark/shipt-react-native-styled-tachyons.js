import * as React from 'react';
import { styled } from '../src';
import data from './data.json';

function randomize(data) {
  return data
    .map(item => ({ item, key: Math.random(1) }))
    .sort((a, b) => a.key < b.key)
    .map(i => i.item);
}

const randomizedData = randomize(data.items);

export default function() {
  return <App items={randomizedData} />;
}

const AppContainer = styled('div')`blue bg-pink flx-i flx-wrap`;

const App = ({ items }) => (
  <AppContainer>
    <ItemList items={randomize(items)} />
  </AppContainer>
);

const ItemListContainer = styled('div')`flx-i jcsb aife b--pink bg-blue yellow`;

const ItemList = ({ items }) => (
  <ItemListContainer>
    {items.map((item, index) => (
      <Item color={item} key={index} />
    ))}
  </ItemListContainer>
);

const ItemContainer = styled('div')`flx-i jcc aic bg-blue`;
const ItemContent = styled('div')`
  ${props => props.color}
`;
const style = {
  borderColor: 'pink'
};

const Item = ({ color }) => (
  <ItemContainer style={style}>
    <ItemContent color={color}>{color}</ItemContent>
  </ItemContainer>
);
