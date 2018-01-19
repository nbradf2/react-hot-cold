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

	it('Renders correct feedback for guess', () => {
		const wrapper = shallow(<Game />);
		wrapper.setState({
			correctAnswer: 55
		});
		wrapper.instance().makeGuess(2);
		expect(wrapper.state('guesses')).toEqual([2]);
		expect(wrapper.state('feedback')).toEqual('You\'re Ice Cold...');

		wrapper.instance().makeGuess(90);
		expect(wrapper.state('guesses')).toEqual([2, 90]);
		expect(wrapper.state('feedback')).toEqual('You\'re Cold...');

		wrapper.instance().makeGuess(45);
		expect(wrapper.state('guesses')).toEqual([2, 90, 45]);
		expect(wrapper.state('feedback')).toEqual('You\'re Warm.');

		wrapper.instance().makeGuess(56);
		expect(wrapper.state('guesses')).toEqual([2, 90, 45, 56]);
		expect(wrapper.state('feedback')).toEqual('You\'re Hot!');

		wrapper.instance().makeGuess(55);
		expect(wrapper.state('guesses')).toEqual([2, 90, 45, 56, 55]);
		expect(wrapper.state('feedback')).toEqual('You got it!');
	});
})
