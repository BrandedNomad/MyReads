import React,{Component} from 'react';

import MainViewNavbarComponent from "./MainViewNavbarComponent";

/**
 * @class MyReadsMainViewContainer
 * @description Represents the Main View
 */
class MyReadsMainViewContainer extends Component {

    render() {
        return (
            <div>
                <MainViewNavbarComponent/>
            </div>
        )
    }
}

export default MyReadsMainViewContainer;