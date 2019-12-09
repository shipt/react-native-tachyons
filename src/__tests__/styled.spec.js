import { T, build, styled } from '../';
import * as React from 'react';
import TestRenderer from 'react-test-renderer';

build({});

const STYLE_CONST = 'jcc';

const StyledButton = styled('button')`flx-i flx-row ${STYLE_CONST} ${props => (props.primary ? 'blue' : 'white')}`;
const StyledButtonMultiLine = styled('button')`
  flx-i flx-row ${STYLE_CONST} ${props => (props.primary ? 'blue' : 'white')}
`;
const InlineButton = ({ primary, style }) => (
  <button primary={!!primary} style={T(`flx-i flx-row jcc ${primary ? 'blue' : 'white'}`, style)} />
);

test('styled (primary)', () => {
  const testStyle = { color: 'pink' };

  const testRenderer = TestRenderer.create(<StyledButton primary style={testStyle} />);

  expect(testRenderer.toJSON()).toMatchSnapshot();
});

test('styled multiLine', () => {
  const testStyle = { color: 'pink' };

  const testRenderer = TestRenderer.create(<StyledButtonMultiLine primary style={testStyle} />);

  expect(testRenderer.toJSON()).toMatchSnapshot();
});

test('styled (output is same as "normal inline library version")', () => {
  const testStyle = { color: 'pink' };

  const testRendererStyled = TestRenderer.create(<StyledButton primary style={testStyle} />);
  const testRendererInline = TestRenderer.create(<InlineButton primary style={testStyle} />);

  expect(testRendererInline.toJSON()).toEqual(testRendererStyled.toJSON());
});

test('with displayName', () => {
  const FunctionWithDisplayName = function() {
    return 'div';
  };
  FunctionWithDisplayName.displayName = 'FunctionWithDisplayNameDisplayName';
  const StyledFunctionWithDisplayName = styled(FunctionWithDisplayName)`pink`;

  expect(StyledFunctionWithDisplayName.displayName).toMatchSnapshot();
});

test('with name', () => {
  const FunctionWithName = function FunctionWithName() {
    return 'div';
  };
  const StyledFunctionWithName = styled(FunctionWithName)`pink`;

  expect(StyledFunctionWithName.displayName).toMatchSnapshot();
});

test('without name', () => {
  const StyledFunctionWithoutName = styled(function() {
    return 'div';
  })`pink`;

  expect(StyledFunctionWithoutName.displayName).toMatchSnapshot();
});

test('using withConfig()', () => {
  const FunctionWithName = function FunctionWithName() {
    return 'div';
  };
  const StyledFunctionWithName = styled(FunctionWithName).withConfig({
    displayName: 'doing this for our babel plugin'
  })`pink`;

  expect(StyledFunctionWithName.displayName).toMatchSnapshot();
});
