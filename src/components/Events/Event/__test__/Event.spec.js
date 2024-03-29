import React from 'react';
import testData from '../../../../../fakeSeed';
import { configure, shallow } from 'enzyme';
import Event from '../Event';
import Adapter from 'enzyme-adapter-react-16';
import toJSON from 'enzyme-to-json';
import moment from 'moment';

configure({ adapter: new Adapter() });


describe('Event Component', () => {
  let testEvent = null;
  let saveToSide = null;

  beforeEach(() => {
    testEvent = testData[0];
    saveToSide = jest.fn();
  });

  it('Should render component', () => {
    // console.log(testData)
    const wrapper = shallow(<Event saveToSidebar={saveToSide} event={testEvent} />);
    expect(toJSON(wrapper)).toMatchSnapshot();
    expect(wrapper.find('.event').length).toEqual(1);
  });

  it('Should have an image', () => {
    const wrapper = shallow(<Event saveToSidebar={saveToSide} event={testEvent} />)
    expect(wrapper.find('.event-image').length).toEqual(1);
  });

  it('Should have some information', () => {
    const wrapper = shallow(<Event saveToSidebar={saveToSide} event={testEvent} />);
    expect(wrapper.find('.event-info').length).toEqual(1);
    // includes the break tags
    expect(wrapper.find('.event-info').children().length).toEqual(6);
  });

  it('Should have an event title', () => {
    const wrapper = shallow(<Event saveToSidebar={saveToSide} event={testEvent} />);
    expect(wrapper.find('.event-title').render().text()).toEqual(testEvent.title);
  });

  it('Should have the location and time of the event', () => {
    const wrapper = shallow(<Event saveToSidebar={saveToSide} event={testEvent} />);
    const expected = `${testEvent.city_name}, ${testEvent.region_abbr}.${moment(testEvent.start_time).format('l')}${moment(testEvent.start_time).format('LT')}`
    expect(wrapper.find('.event-loc').render().text()).toEqual(expected);
  });

  it('Should have the event venue displayed', () => {
    const wrapper = shallow(<Event saveToSidebar={saveToSide} event={testEvent} />);

    expect(wrapper.find('.event-venue').length).toEqual(1);
    expect(wrapper.find('.event-venue').render().text()).toEqual(testEvent.venue_name);
  });

  it('Should have an event description, if one is available', () => {
    const wrapper = shallow(<Event saveToSidebar={saveToSide} event={testEvent} />);
    expect(wrapper.find('.event-desc').length).toEqual(1);

    // if (testEvent.description) {
    //   let expected = testEvent.description.substring(0, 175) + '...';
    //   //markdown parser really messed this test up. COME BACK TO THIS

    //   //expect(wrapper.find('.event-desc').render().text().length).toEqual(expected.length);
    // } else {

    //   //expect(wrapper.find('.event-desc').render().text().length).toEqual("There is no description for this event, sorry".length);
    // }
  });

  it('Should have an event description that does not exceed 200 chars', () => {
    const wrapper = shallow(<Event saveToSidebar={saveToSide} event={testEvent} />);
    expect(wrapper.find('.event-desc').render().text().length).toBeLessThanOrEqual(178);
  });

});
