import React from 'react';
import {Checkout} from '../utils/index'
import {shallow} from 'enzyme'
import reduxStore from "../redux/store";

it('Should render without errors', () => {
    const component = shallow(<Checkout store={reduxStore}/>).dive().dive();
    const checkout = component.find('.Checkout');
    expect(checkout.length).toBe(1);
});
