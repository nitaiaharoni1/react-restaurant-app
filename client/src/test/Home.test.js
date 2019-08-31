import React from 'react';
import {Home} from '../utils/index'
import {shallow} from 'enzyme'

it('Should render without errors', () => {
    const component = shallow(<Home/>);
    const home = component.find('.Home');
    expect(home.length).toBe(1);
});
