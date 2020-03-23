/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import Enzyme, { shallow, render, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import ReactDOM from 'react-dom';
import Calendar from '../Calendar';

Enzyme.configure({ adapter: new Adapter() });

describe('Calendar component', () => {
  it('renders correctly enzyme', () => {
    const wrapper = shallow(<Calendar />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('has the correct state properties', () => {
    const wrapper = shallow(<Calendar />);
    setTimeout(() => {
      expect(wrapper.state('selectedDate')).toEqual(new Date());
      expect(wrapper.state('currentMonth')).toEqual(new Date());
      done();
    }, 1000);
  });

  it('should switch between months', () => {
    const wrapper = shallow(<Calendar />);
    setTimeout(() => {
      wrapper.find('button').simulate('click');
      expect(wrapper.state('currentMonth')).toEqual(subMonths(this.state.currentMonth, 1));
      done();
    }, 1000);
  });
});
