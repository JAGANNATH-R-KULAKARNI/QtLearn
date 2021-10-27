import React from 'react';
import { shallow } from 'enzyme';
import FullScreenDialog from '../editor';
import  CKEditor  from '../CKEditor';

const setUp=(props={})=>{
 const component=shallow(<FullScreenDialog {...props}/>);
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

  it('should render Dialog', () => {
    const Editor=findByTestAttribute(component,'jagEditorDialog');
    expect(Editor.length).toBe(1);
  });

   it('should render AppBar', () => {
    const appBar=findByTestAttribute(component,'jagEditorAppbar');
    expect(appBar.length).toBe(1);
  });

});
