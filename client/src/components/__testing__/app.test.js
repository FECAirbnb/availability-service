/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React from 'react';
import toJson from 'enzyme-to-json';
import App from '../../App';
import Reserve from '../Reserve';
import { shallow, mount } from '../../enzyme';

const sampleData = [
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
];

describe('App component', () => {
  it('renders correctly enzyme', () => {
    const wrapper = shallow(<App />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  const wrapper = mount(<App />);

  beforeEach(() => {
    wrapper.setState({
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
    });
    wrapper.setState({ locationId: 1 });
  });

  it('should have a location number as a state', () => {
    expect(wrapper.state('locationId')).toEqual(1);
  });
});
