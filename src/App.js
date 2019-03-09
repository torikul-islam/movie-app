import React, {Component} from 'react';
import './App.css';
import Movies from "./components/common/Movies";

class App extends Component {
  render() {
    return (
        <React.Fragment>
          <div className="container">
              <Movies />
          </div>
        </React.Fragment>
    );
  }
}

export default App;
