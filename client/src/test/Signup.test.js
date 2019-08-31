import React from 'react';
import {Signup} from '../utils/index'
import {shallow} from 'enzyme'
import reduxStore from "../redux/store";

it('Should render without errors', () => {
    const component = shallow(<Signup store={reduxStore}/>).dive();
    const signup = component.find('.Signup');
    expect(signup.length).toBe(1);
});
