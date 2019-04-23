import React from 'react';
import ReactDOM from 'react-dom';
import NaviToggle from '../components/NaviToggle';
import renderer from "react-test-renderer";

describe('NaviToggle', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<NaviToggle />, div);
  });

  it('matches the snapshot', () => {
    const component = renderer.create(
      <NaviToggle />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

});
