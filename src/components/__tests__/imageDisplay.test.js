const React = require('react');
const {shallow} = require('enzyme');
const ImageDisplay = require('components/imageDisplay');

const DEFAULT_WIDTH = 200;
const LOADING_GIF = 'loading.gif';
describe('ImageDisplay', () => {
  it('Renders the loading gif at the default width when passed loading:true', () => {
    const props = {
      loading: true
    };
    const wrapper = shallow(<ImageDisplay {...props}/>);
    const image = wrapper.find('img');
    
    assert.equal(image.prop('src'), LOADING_GIF);
    assert.equal(image.prop('width'), DEFAULT_WIDTH);
  });

  it('Renders an image when passed a url', () => {
    const props = {
      url: 'http://www.example.com/pusheen.gif'
    }
    const wrapper = shallow(<ImageDisplay {...props}/>);
    const image = wrapper.find({src: 'http://www.example.com/pusheen.gif'});
    assert.equal(image.length, 1);
  });
})
