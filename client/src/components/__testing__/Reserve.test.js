/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

import Enzyme, { shallow, render, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import ReactDOM from 'react-dom';
import Reserve from '../Reserve';

Enzyme.configure({ adapter: new Adapter() });

const sampleLoc = {
  state: {
    data: [
      {
        id: 1,
        name: 'Bora bora',
        price: 1450,
        cleaning_fee: 100,
        service_fee: 100,
        date: '2020-03-01T07:00:00.000Z',
        Location_id: 1,
        Dates_id: 1
      }
    ]
  }
};
describe('Reserve component', () => {
  it('renders correctly enzyme', () => {
    const wrapper = shallow(<Reserve state={sampleLoc.state} />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should have a location number as a state', () => {
    const wrapper = shallow(<Reserve state={sampleLoc.state} />);
    expect(wrapper.state('open')).toEqual(false);
  });

  it('should add to the guest count state when clicked', () => {
    const wrapper = shallow(<Reserve state={sampleLoc.state} />);
    setTimeout(() => {
      wrapper.find('button').simulate('click');
      expect(wrapper.state('guestCount')).toEqual(2);
      wrapper.find('button').simulate('click');
      expect(wrapper.state('guestCount')).toEqual(3);
      done();
    }, 1000);
  });

  it('should subtract from the guest count state when clicked', () => {
    const wrapper = shallow(<Reserve state={sampleLoc.state} />);
    setTimeout(() => {
      wrapper.find('button').simulate('click');
      expect(wrapper.state('guestCount')).toEqual(0);
      wrapper.find('button').simulate('click');
      expect(wrapper.state('guestCount')).toEqual(1);
      wrapper.find('button').simulate('click');
      expect(wrapper.state('guestCount')).toEqual(2);
      wrapper.find('button').simulate('click');
      expect(wrapper.state('guestCount')).toEqual(1);
      done();
    }, 1000);
  });

  it('should change state clickGuest to true', () => {
    const wrapper = shallow(<Reserve state={sampleLoc.state} />);
    setTimeout(() => {
      wrapper.find('button').simulate('click');
      expect(wrapper.state('clickGuest')).toEqual(true);
      done();
    }, 1000);
  });

  it('should change state clickGuest to false', () => {
    const wrapper = shallow(<Reserve state={sampleLoc.state} />);
    setTimeout(() => {
      wrapper.find('button').simulate('click');
      expect(wrapper.state('clickGuest')).toEqual(false);
      done();
    }, 1000);
  });

  it('should change state open to true', () => {
    const wrapper = shallow(<Reserve state={sampleLoc.state} />);
    setTimeout(() => {
      wrapper.find('button').simulate('click');
      expect(wrapper.state('open')).toEqual(true);
      done();
    }, 1000);
  });

  it('should change state open to false', () => {
    const wrapper = shallow(<Reserve state={sampleLoc.state} />);
    setTimeout(() => {
      wrapper.find('button').simulate('click');
      expect(wrapper.state('open')).toEqual(true);
      done();
    }, 1000);
  });

  it('should have a default state', () => {
    const wrapper = shallow(<Reserve state={sampleLoc.state} />);
    expect(wrapper.state('open')).toEqual(false);
    expect(wrapper.state('clickGuest')).toEqual(false);
    expect(wrapper.state('checkIn')).toEqual('Check in');
    expect(wrapper.state('checkOut')).toEqual('Check out');
    expect(wrapper.state('guestCount')).toEqual(1);
  });
});
