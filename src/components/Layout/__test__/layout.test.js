import React from 'react';
import { shallow } from 'enzyme';
import  Layout  from '../Layout';

const setUp=(props={})=>{
 const component=shallow(<Layout {...props}/>);
 return component;
};

const findByTestAttribute=(component,attribute)=>{
const wrapper=component.find(`[data-test='${attribute}']`);
return wrapper;
};

describe('CKEditor Component Testing',()=>{

   let component;

   beforeAll(()=>{
   component=setUp();
   });

   /*
jagLayout(Box,TP,IB,List,Drawer)
   */
  it('should render div', () => {
    const wrapper=findByTestAttribute(component,'jagLayoutdiv');
    expect(wrapper.length).toBe(1);
  });

});
