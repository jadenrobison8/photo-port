import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import About from '..';

const { asFragment } = render(<About />);

afterEach(cleanup);

describe('About component', () => {
   //First test 
   it('renders', () => {
      render(<About />);
   });

   //second test
   it('matches snapshot DOM node structure', () => {
      //render About
      expect(asFragment()).toMatchSnapshot();
   })
   
})