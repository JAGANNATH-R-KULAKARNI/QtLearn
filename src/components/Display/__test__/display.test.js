import React from 'react';
import { shallow } from 'enzyme';
import SwipeableTextMobileStepper from '../display';

const setUp=(props={})=>{
 const component=shallow(<SwipeableTextMobileStepper {...props}/>);
 return component;
};

const findByTestAttribute=(component,attribute)=>{
const wrapper=component.find(`[data-test='${attribute}']`);
return wrapper;
};

describe('Display Component Testing',()=>{

   let component;

   beforeAll(()=>{
   component=setUp();
   });

  it('should render SwipeableTextMobileStepper', () => {
    const STMS=findByTestAttribute(component,'jagDisplayBox');
    expect(STMS.length).toBe(1);
  });

   it('should render AutoPlaySwipeableViews', () => {
    const APSTMS=findByTestAttribute(component,'jagDisplayBoxAutoPlaySwipeableViews');
    expect(APSTMS.length).toBe(1);
  });

  it('should render 4 divs', () => {
    const divs=component.find('div')
    expect(divs.length).toBe(4);
  });
});
