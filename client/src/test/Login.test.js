import React from 'react';
import {Login} from '../utils/index'
import {shallow} from 'enzyme'
import reduxStore from "../redux/store";

it('Should render without errors', () => {
    const component = shallow(<Login store={reduxStore}/>).dive();
    const login = component.find('.Login');
    expect(login.length).toBe(1);
});
