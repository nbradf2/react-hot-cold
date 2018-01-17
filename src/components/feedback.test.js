import React from 'react';
import {shallow} from 'enzyme';

import Feedback from './feedback';

describe('<Feedback />', () => {
	it('Renders without crashing', () => {
		shallow(<Feedback />);
	});

	it('Should render feedback with properties', () => {
		let testFeedback = '';
		const wrapper = shallow(<Feedback feedback="you are hot" guessCount="3"/>);
		expect(wrapper.text()).toEqual("you are hot Guess again!");
	})
})