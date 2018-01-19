import React from 'react';
import {shallow} from 'enzyme';

import Game from './game';

describe('<Game />', () => {
	it('Renders without crashing', () => {
		shallow(<Game />);
	});
	it('Renders new game', () => {
		const wrapper = shallow(<Game />);
		wrapper.setState({
			guesses: [4, 29, 98],
			feedback: 'Good!',
			correctAnswer: -1
		});
		wrapper.instance().restartGame();
		expect(wrapper.state('guesses')).toEqual([]);
		expect(wrapper.state('feedback')).toEqual('Make your guess!');
		expect(wrapper.state('correctAnswer')).toBeGreaterThanOrEqual(0);
		expect(wrapper.state('correctAnswer')).toBeLessThanOrEqual(100);
	});
})