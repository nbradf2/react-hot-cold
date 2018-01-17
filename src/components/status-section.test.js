import React from 'react';
import {shallow} from 'enzyme';

import StatusSection from './status-section';

describe('<StatusSection', () => {
	it('Renders without crashing', () => {
		const values = [1,2,3];
		shallow(<StatusSection guesses={values}/>);
	});
})