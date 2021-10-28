import React from 'react';
import LayoutUI from './LayoutUI';

class Layout extends React.Component
{
  render()
  {
    return (
      <div data-test="jagLayoutdiv">
        <LayoutUI/>
      </div>
    );
  }
};

export default Layout;