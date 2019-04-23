import React from 'react';
import ReactDOM from 'react-dom';
import Navi from '../containers/Navi';
import renderer from "react-test-renderer";

describe('Navi', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Navi />,
      div);
  });

  it('matches the snapshot', () => {
    const component = renderer.create(
      <Navi />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
