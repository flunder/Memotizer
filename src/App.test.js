import React from 'react';
import App from './App';
import {shallow} from 'enzyme';

describe('The main app', () => {
    it('the app should show the logo', () => {
        const app  = shallow(<App/>);

        expect(app.contains(
            <img src="/assets/images/logo.png" className="logo" alt="Logo" />
        )).toBe(true);
    })
})
