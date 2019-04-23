import React from 'react';
import ReactDOM from 'react-dom';
import Home from '../containers/Home';
import renderer from "react-test-renderer";

describe('Home', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Home />, div);
  });

  it("matches the snapshot", () => {
    var tree = renderer.create(
        <Home />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
