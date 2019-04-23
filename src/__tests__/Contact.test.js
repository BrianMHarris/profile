import React from 'react';
import ReactDOM from 'react-dom';
import Contact from '../containers/Contact';
import renderer from "react-test-renderer";

describe('Contact', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Contact />,
      div);
  });

  it('matches the snapshot', () => {
    const component = renderer.create(
      <Contact />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
