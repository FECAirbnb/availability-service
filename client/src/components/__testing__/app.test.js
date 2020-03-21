/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React from 'react';
import Enzyme, { configure, shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../../App';

configure({ adapter: new Adapter() });

export { configure, shallow, mount, render };

export default Enzyme;

describe('App component', () => {
  test('renders', () => {
    const wrapper = shallow(<App />);

    expect(wrapper.exists()).tobe(true);
  });
});
