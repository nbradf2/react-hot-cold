import React from 'react';
import {shallow} from 'enzyme';

import GuessCount from './guess-count';

describe('<GuessCount />', () => {
	it('Renders without crashing', () => {
		shallow(<GuessCount />);
	});

	it('Renders the correct guess count', () => {
		const guess = 18;
		const wrapper = shallow(<GuessCount guessCount={guess} />);
		expect(wrapper.text()).toEqual(`You've made ${guess} guesses!`);
	});
})