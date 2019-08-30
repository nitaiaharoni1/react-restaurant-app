import React from 'react';
import {App} from '../utils/index'
import {shallow} from 'enzyme'
import reduxStore from "../redux/store";

it('Should render without errors', () => {
    const component = shallow(<App store={reduxStore}/>);
    const app = component.find('App');
    expect(app.length).toBe(1);
});
