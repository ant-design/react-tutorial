import { mount } from 'enzyme';
import TestDemo from '../src/component/TestDemo';

const sum = function (a, b) {
  return a + b;
};

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('TestDemo', () => {
  const wrapper = mount(<TestDemo />);
  expect(wrapper.find('div').text()).toBe('test');
});
