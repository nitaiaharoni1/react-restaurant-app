import React from 'react';
import {Gallery} from '../utils/index'
import {shallow} from 'enzyme'

it('Should render without errors', () => {
    const component = shallow(<Gallery/>);
    // console.log(component.debug());
    const gallery = component.find('.Gallery');
    expect(gallery.length).toBe(1);
});
