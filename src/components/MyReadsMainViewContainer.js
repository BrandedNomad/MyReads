import React,{Component} from 'react';

import MainViewNavbarComponent from "./MainViewNavbarComponent";
import MainViewContentContainer from "./MainViewContentContainer";
import MainViewSearchButtonComponent from "./MainViewSearchButtonComponent";

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
                <MainViewSearchButtonComponent/>
            </div>
        )
    }
}

export default MyReadsMainViewContainer;