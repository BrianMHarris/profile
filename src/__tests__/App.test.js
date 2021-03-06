import React from 'react';
import ReactDOM from 'react-dom';
import App from '../containers/App';
import renderer from "react-test-renderer";

describe('App', () => {
  it('renders without crashing', () => {
    console.log(App);
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });

  it("matches the snapshot", () => {
    var tree = renderer.create(
        <App />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
