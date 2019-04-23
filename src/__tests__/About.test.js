import React from 'react';
import ReactDOM from 'react-dom';
import About from '../components/About';
import renderer from "react-test-renderer";

describe('About', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<About />, div);
  });

  it("matches the snapshot", () => {
    var tree = renderer.create(
        <About />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
