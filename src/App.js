import React,{Component} from 'react';
import Layout from './components/Layout/Layout';
import ErrorBoundry from './components/Error/error';

class App extends Component
{
  render()
  {
    return (
      <div>
        <ErrorBoundry>
     <Layout />
     </ErrorBoundry>
      </div>
    );
  }
};

export default App;
