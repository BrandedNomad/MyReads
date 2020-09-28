import React, {Component} from 'react';
import logo from './logo.svg';
import './styles/styles.scss';

import MyReadsMainViewContainer from "./components/MyReadsMainViewContainer";

class App extends Component {

  render(){
    return (
        <div className="App">
          <MyReadsMainViewContainer/>
        </div>
    );
  }

}

export default App;
