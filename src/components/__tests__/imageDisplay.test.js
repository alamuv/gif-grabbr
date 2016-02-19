const React = require('react');
const {shallow, mount, render} = require('enzyme');
const ImageDisplay = require('components/imageDisplay');

describe('A passing react test', () => {
  it('passes', () => {
    const wrapper = shallow(<ImageDisplay />);
    assert.equal(wrapper.length, 1);
  })
})
