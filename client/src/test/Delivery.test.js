import React from 'react';
import {Delivery} from '../utils/index'
import {shallow} from 'enzyme'

it('Should render without errors', () => {
    const component = shallow(<Delivery/>);
    const delivery = component.find('.Delivery');
    expect(delivery.length).toBe(1);
});
