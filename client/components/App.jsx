import React from 'react';
import Nav from './Nav.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

  }



  render() {
    return (
      <div>
        <div id="nav">
          < Nav />
        </div>
      </div>
    );
  }
}

export default App;

