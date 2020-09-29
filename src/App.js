import React, {Component} from 'react';
import logo from './logo.svg';
import './styles/styles.scss';
import {Route} from 'react-router-dom';

import MyReadsMainViewContainer from "./components/MyReadsMainViewContainer";
import MyReadsSearchViewContainer from "./components/MyReadsSearchViewContainer";

class App extends Component {

  render(){
    return (
        <div className="App">
            <Route
                exact path='/'
                render={()=>{
                    return  (<MyReadsMainViewContainer/>)
                }}
            />
            <Route
                exact path='/search'
                render={()=>{
                    return  (<MyReadsSearchViewContainer/>)
                }}
            />
        </div>
    );
  }

}

export default App;
