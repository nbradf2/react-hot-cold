import React from 'react';
import {shallow} from 'enzyme';

import GuessList from './guess-list';

describe('<GuessList />', () => {
	let guesses = [1, 2, 3];
	it('Renders without crashing', () => {
		shallow(<GuessList guesses={guesses}/>);
	});
	
	it('Renders list of guesses', () => {
		const values = [2, 56, 78, 45];
		const wrapper = shallow(<GuessList guesses={values} />);
		const items = wrapper.find('li');
		expect(items.length).toEqual(values.length);
		values.forEach((value, index) => {
			expect(items.at(index).text()).toEqual(value.toString());
		});
	});
})