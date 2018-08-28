import Adapter from 'enzyme-adapter-react-16';
import Address from '../Address';
import { configure, shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import testData from '../../../../fakeSeed';
import React from 'react';

configure({ adapter: new Adapter() });

let testEvent = null;
let wrapper = null;

describe('Address Component', () => {
  beforeEach(() => {
    testEvent = testData[0];
    wrapper = shallow(<Address {...testEvent} />);

  });

  it('Should render component', () => {
    expect(wrapper.find('.event-modal-address').length).toEqual(1);
  });

  it('Should display the correct address for the event', () => {
    const expected = `${testEvent.venue_address} ${testEvent.city_name}, ${testEvent.region_abbr}. ${testEvent.postal_code}`
    expect(wrapper.find('.venue-address').render().text()).toEqual(expected);
  });

  it('Should display the correct venue for the event', () => {
    const expected = testEvent.venue_name;
    expect(wrapper.find('.venue-name').render().text()).toEqual(expected);
  });

  it('Should have the correct url attached to the venue name', () => {
    expect(wrapper.find('.venue-name').filterWhere(item => {
      return item.render()[0].attribs.href === testEvent.venue_url;
    }).length).toEqual(1);
  });

  it('Should match the snapshot', () => {
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});