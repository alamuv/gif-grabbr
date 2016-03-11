const React = require('react');
const {shallow} = require('enzyme');
const sinon = require('sinon/pkg/sinon');
const App = require('components/app');

describe('App', () => {
  it('Passes loading:true to ImageDisplay', () => {
    const wrapper = shallow(<App />);
    const imageDisplay = wrapper.find('ImageDisplay');
    assert.equal(imageDisplay.prop('loading'), true);
  });

  it('Displays the loading GIF on startup', () => {
    const wrapper = shallow(<App />);
    const imageTag = wrapper.find('ImageDisplay').shallow().find('img');
    assert.equal(imageTag.prop('src'), 'loading.gif');
  });

  it('Is instantiated with no GIF object', () => {
    const wrapper = shallow(<App />);
    const curState = wrapper.state();

    assert.deepEqual(curState.gif, {});
  });

  it('Updates the page when a new GIF object is provided', () => {
    const newState = {
      loading: false,
      term: 'facepalm',
      gif: {url: 'http://gifurl', width: '200', sourceUrl: 'http://srcurl'}
    }

    const wrapper = shallow(<App />);
    wrapper.setState(newState);
    const imageDisplay = wrapper.find('ImageDisplay'); // finds by the component's display name

    assert.equal(imageDisplay.prop('loading'), false);
    assert.equal(imageDisplay.prop('url'), 'http://gifurl');
  });

});
