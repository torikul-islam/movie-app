import React, {Component} from 'react';
import './App.css';
import Movies from "./components/common/Movies";

class App extends Component {
  render() {
    return (
        <React.Fragment>
          <Movies />
        </React.Fragment>
    );
  }
}

export default App;
