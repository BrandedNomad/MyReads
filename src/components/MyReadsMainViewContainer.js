import React,{Component} from 'react';

import MainViewNavbarComponent from "./MainViewNavbarComponent";
import MainViewContentContainer from "./MainViewContentContainer";

/**
 * @class MyReadsMainViewContainer
 * @description Represents the Main View
 */
class MyReadsMainViewContainer extends Component {

    render() {
        return (
            <div>
                <MainViewNavbarComponent/>
                <MainViewContentContainer/>
            </div>
        )
    }
}

export default MyReadsMainViewContainer;