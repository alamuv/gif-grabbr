const React = require('react');
const {shallow} = require('enzyme');
const SearchBar = require('components/searchBar');
const sinon = require('sinon/pkg/sinon');

describe('SearchBar', () => {
  it('Renders a text input', () => {
    const wrapper = shallow(<SearchBar />);

    assert.equal(wrapper.is('input'), true);
  });

  it('Has a placeholder', () => {
    const wrapper = shallow(<SearchBar />);
    const placeholder = wrapper.prop('placeholder');

    assert.equal(placeholder, 'Type a tag name here');
  });

  it('Does not trigger a search when less than 3 characters have been entered', () => {
    const onSearchStub = sinon.spy();
    const wrapper = shallow(<SearchBar onSearch={onSearchStub}/>);
    const searchField = wrapper.find('input');
    const event = {target: {value: 'ca'}};
    searchField.simulate('change', event);
    assert.equal(onSearchStub.calledOnce, false);
  });

  it('Triggers a new search as the user types', () => {
    const onSearchStub = sinon.spy();
    const wrapper = shallow(<SearchBar onSearch={onSearchStub}/>);
    const searchField = wrapper.find('input');
    const event1 = {target: {value: 'cat'}};
    const event2 = {target: {value: 'cats'}};

    searchField.simulate('change', event1);
    searchField.simulate('change', event2);
    assert.equal(onSearchStub.calledTwice, true);
  });

  it('Triggers a new search when the user hits enter', () => {
    const onSearchStub = sinon.spy();
    const wrapper = shallow(<SearchBar onSearch={onSearchStub}/>);
    const searchField = wrapper.find('input');
    const pressEnter = {keyCode: 13};
    wrapper.setState({searchTerm: 'pusheen'});

    searchField.simulate('keyUp', pressEnter);
    searchField.simulate('keyUp', pressEnter);
    searchField.simulate('keyUp', pressEnter);

    assert.equal(onSearchStub.callCount, 3);
  });
});

