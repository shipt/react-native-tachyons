import { T as getStyle } from './index';
import * as React from 'react';

function createTachyonStyleString(interpolation, items, props) {
  return interpolation.reduce((current, string, index) => {
    let end = '';

    switch (typeof items[index]) {
      case 'string':
        end = items[index];
        break;
      case 'function':
        end = items[index](props);
        break;
    }

    return `${current}${string}${end}`;
  }, '');
}

export function styled(component, ...styles) {
  let displayName = null;

  function StyledInterpolation(interpolation, ...items) {
    function StyledComponent({ style, forwardedRef, ...props }) {
      const tachyonString = createTachyonStyleString(interpolation, items, props);

      const styledProps = {
        style: getStyle(tachyonString, ...styles, style),
        ref: forwardedRef,
        ...props
      };

      return React.createElement(component, styledProps);
    }

    StyledComponent.displayName = displayName || `Styled${component.displayName || component.name || 'Component'}`;

    const StyledComponentWithRefForwarding = React.forwardRef((props, ref) => (
      <StyledComponent {...props} forwardedRef={ref} />
    ));

    StyledComponentWithRefForwarding.displayName = StyledComponent.displayName;

    return StyledComponentWithRefForwarding;
  }

  StyledInterpolation.withConfig = function(config) {
    displayName = config.displayName;

    return StyledInterpolation;
  };

  return StyledInterpolation;
}
