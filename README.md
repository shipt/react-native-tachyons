# React Native Tachyons

Welcome to Shipt's React Native Tachyons library! Checkout our documentation below to learn how to get started.

## Table of Contents

- [Getting Started](#getting-started)
  - [Installation](#installation)
  - [Defining Custom Tachyons](#defining-custom-tachyons-optional)
- [Usage](#usage)
  - [Basic Example](#basic-example)
  - [Usage With Raw Style Objects](#usage-with-raw-style-objects)
  - [Styled Component Props](#styled-component-props)
  - [Composing Styled Components](#composing-styled-components)
- [The `T` Function](#the-`t`-function)
- [Babel Plugin](#styled-components-babel-plugin)
- [Gotchas](#gotchas)
  - [Usage with Animated.createAnimatedComponent](#usage-with-animated.createanimatedcomponent)
- [Tachyon Table](#tachyon-table)
- [Attributions](#attributions)
- [Contributing](#contributing)
- [Versioning](#versioning)
- [Maintainers](#maintainers)
- [License](#license)

## Getting Started

These instructions will help you get set up with **react-native-tachyons**.

## v1 to v2 Migration

v2 was solely an update to the build in style sizing.

|     | 0   | 1     | 2    | 3   | 4    | 5   | 6   | 7   | 8   | 9   | 10  |
| --- | --- | ----- | ---- | --- | ---- | --- | --- | --- | --- | --- | --- |
| v1  | 0   | 0.25  | 0.5  | 1   | 2    | 4   | 8   | 16  | 32  | n/a | n/a |
| v2  | 0   | 0.125 | 0.25 | 0.5 | 0.75 | 1   | 2   | 4   | 8   | 16  | 32  |

### Installation

```sh
# with npm
npm i --save @shipt/react-native-tachyons

# with yarn
yarn add @shipt/react-native-tachyons
```

### Defining Custom Tachyons (Optional)

You can use the `build` function to create your own custom tachyon strings.

```js
// styleConfig.js

import { build } from '@shipt/react-native-tachyons';

// define your rem
const rem = 16;

// define your color palette
const colors = {
  white: '#ffffff',
  black: '#000000'
};

// define your style shorthands
const styles = {
  'gutter-h': { paddingLeft: '1rem', paddingRight: '1rem' },
  'gutter-v': { paddingTop: '1rem', paddingBottom: '1rem' },
  'some-style': { height: 100, width: '100%' }
};

// Run build
build({
  rem,
  colors,
  styles
});
```

Now the custom tachyons you defined will be usable.

```jsx
import React from 'react';
import { View, Text } from 'react-native';
import { styled } from '@shipt/react-native-tachyons';

const ButtonContainer = styled(View)`some-style gutter-h gutter-v`;
const ButtonContent = styled(Text)`white`;

export function Button(props) {
  return (
    <ButtonContainer>
      <ButtonContent>{props.text}</ButtonContent>
    </ButtonContainer>
  );
}
```

## Usage

### Basic Example

Define components using a [styled-components](https://www.styled-components.com/)-like syntax.

```jsx
import React from 'react';
import { View, Text } from 'react-native';
import { styled } from '@shipt/react-native-tachyons';

const ButtonContainer = styled(View)`flx-i jcc aic`;
const ButtonContent = styled(Text)`p3 white`;

export function Button(props) {
  return (
    <ButtonContainer>
      <ButtonContent>{props.text}</ButtonContent>
    </ButtonContainer>
  );
}
```

### Usage With Raw Style Objects

While tachyons will cover 90% of your needs, it's inevitable that you'll sometimes need something custom.

```jsx
// ...react imports
import { styled } from '@shipt/react-native-tachyons';

// style objects that won't change can be pass in here
const Box = styled(View, styles.Box, styles.anotherStyle)`flx-i gutter-h bg-white`;

function MyComponent(props) {
  const backgroundColor = props.active ? '#051937' : '#12B2EB;
  const dynamicStyle = { backgroundColor }

  // styles that will change over time can be passed as a  prop
  return <Box style={dynamicStyle} />;
}

const styles = StyleSheet.create({
  Box: {
    width: 234
  },
  anotherStyle: {
    color: 'red
  }
});
```

### Styled Component Props

Just like the [Styled Components Library](https://www.styled-components.com/) (thanks for the awesome work and inspiration, guys), our styled components use the tagged template literal syntax. This means that you can use string interpolation to pass in functions that return tachyon strings based on props. That's a mouth full, so here's an example:

```jsx
import { styled } from '@shipt/react-native-tachyons';

// Let's make a button that changes the background color based on a `primary` prop
const Button = styled(View)`flx-i gutter-h ${props => (props.primary ? 'bg-blue' : 'bg-white')}`;

function CancelButton() {
  return <Button />; // background will be white
}

function SubmitButton() {
  return <Button primary />; // background will be blue
}
```

### Composing Styled Components

You can compose and build up styled components. Let's make some buttons to demonstrate. Notice that `CancelButton` wraps the initial `Button`, etc.

```jsx
import { styled } from '@shipt/react-native-tachyons'

const Button = styled(TouchableOpacity)`w5 h3 p3 black`

// Reuse Button
const CancelButton = styled(Button)`bg-white`
const WhiteTextButton = styled(Button)`white`

// Reuse WhiteTextButton
const PrimaryButton = styled(WhiteTextButton)`bg-blue`
const SuccessButton = styled(WhiteTextButton)`bg-green`
const DangerButton = styled(WhiteTextButton)`bg-red`

function Actions() {
  return <>
    <PrimaryButton onPress={() => console.log("do primary stuff")}>
    <SuccessButton onPress={() => console.log("be successful")}>
    <DangerButton onPress={() => console.log("risk it")}>
    <CancelButton onPress={() => console.log("cancel something")}>
  </>
}
```

## The `T` Function

If you're not into styled components, you can use the `T` function. It accepts a string of tachyons and returns an array of style objects. The array is memoized to work well with things like `PureComponent` and `React.Memo`.

```jsx
import React from 'react';
import { View, Text } from 'react-native';
import { T } from '@shipt/react-native-tachyons';

export function Button(props) {
  return (
    <View style={T('flx-i jcc aic')}>
      <Text style={T('white')}>{props.text}</Text>
    </View>
  );
}
```

The `T` function will also accept additional style objects. These additional styles will override the provided tachyons.

```jsx
// ...react imports
import { T } from '@shipt/react-native-tachyons';

function MyComponent() {
  const style = T('flx-i gutter-h bg-white', styles.Box);
  return <View style={style} />;
}

const styles = StyleSheet.create({
  Box: {
    width: 234
  }
});
```

## Styled Components Babel Plugin

We'll have a babel plugin _coming soon_ that will make debugging easier.

## Gotchas

### Usage with `Animated.createAnimatedComponent`

We haven't tracked down the exact issue nor can we reliably replicate, _but_ occasionally RN will throw a nasty error
if you use `Animated.createAnimatedComponent` with a styled component. The solution is to style your component prior to using
`Animated.createAnimatedComponent`.

```jsx
// GOOD
const Component = styled(View)`absolute`;

const AnimatedComponent = React.createAnimatedComponent(Component);

// BAD
const AnimatedView = React.createAnimatedComponent(View);

const AnimatedComponent = styled(AnimatedView)`absolute`;
```

## Tachyon Table

For a full list of tachyon strings and the styles they represent, go [here](./docs/styles.md).

## Attributions

Read the [Attributions](ATTRIBUTIONS.md) here.

## Contributing

Please read our [CONTRIBUTING.md](./CONTRIBUTING.md) for details on our community guidelines and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/shipt/react-native-tachyons/tags).

To update versions, run the `yarn version` and follow the prompts.

## Maintainers

To find out who our Maintainers are, check out [MAINTAINERS.md](MAINTAINERS.md).

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
