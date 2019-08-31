import React from 'react';
import App from '../App'
import {shallow} from 'enzyme'
import reduxStore from "../redux/store";

it('Should render without errors', () => {
    const component = shallow(<App store={reduxStore}/>).dive().dive();
    const app = component.find('.App');
    expect(app.length).toBe(1);
});

