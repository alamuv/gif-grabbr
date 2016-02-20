const React = require('react');
const {shallow, mount, render} = require('enzyme');
const ImageDisplay = require('components/imageDisplay');

const DEFAULT_WIDTH = 200;
const LOADING_GIF = 'loading.gif';
describe('ImageDisplay', () => {
  it('Renders the loading gif at the default width when passed loading:true', () => {
    const props = {
      loading: true
    };
    const wrapper = shallow(<ImageDisplay {...props}/>);
    assert.equal(wrapper.prop('src'), LOADING_GIF);
    assert.equal(wrapper.prop('width'), DEFAULT_WIDTH);
  });
})
