import React from 'react';
import ReactDOM from 'react-dom';
import NaviMenu from '../components/NaviMenu';
import renderer from "react-test-renderer";

describe('Navi', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <NaviMenu />,
      div);
  });

  it('matches the snapshot', () => {
    const component = renderer.create(
        <NaviMenu />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
