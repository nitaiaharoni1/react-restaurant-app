import React from 'react';
import {Cart} from '../utils/index'
import {shallow} from 'enzyme'
import reduxStore from "../redux/store";

it('Should render without errors', () => {
    const component = shallow(<Cart store={reduxStore}/>).dive().dive();
    const cart = component.find('.Cart');
    expect(cart.length).toBe(1);
});
