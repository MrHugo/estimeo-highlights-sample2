/**
 * Created by Adrien on 02/07/2017.
 */
import { shallow } from 'enzyme'
import React from 'react'

import Header from '../components/Header';

describe('<Header />', () => {

    it('Title tag', () => {
      const wrapper = shallow(<Header />);
      expect(wrapper.find('title').text()).toBe('Estimeo Highlights')
    })

    it('Style tag count', () => {
      const wrapper = shallow(<Header />);
      expect(wrapper.find('style').length).toBe(1)
    })
})
