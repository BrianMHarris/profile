import React from 'react';
import ContactForm from '../containers/ContactForm';
import renderer from "react-test-renderer";
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

import { shallow, mount, render } from 'enzyme';

describe('ContactForm', () => {
  it('renders without crashing', () => {
    const wrapper = render(<ContactForm />);
  });

  it('matches the snapshot', () => {
    const wrapper = render(<ContactForm />);
    expect(wrapper).toMatchSnapshot();
  });

  // UNIT TESTS

  it('onSubmit is called when button is clicked', () => {
    const wrapper = render(<ContactForm />);
    const onClick = jest.fn();
    const button = wrapper.find(`[data-test="button"]`);
    console.log(button);
    button.simulate('click');
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});

// UNIT TEST
// 1. input validation for forms. attempt lots of incorrect inputs
// 2. reject submission if form empty
// 3. state changes to reflect input (the value of the component changes, don't test state directly)
// 4. works correctly when clicking submit with correct inputs

// Integration Tests
// 1. Mock out a full use of the contact form
