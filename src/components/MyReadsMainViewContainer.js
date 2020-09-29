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

        const bookShelf = this.props.bookShelf

        return (
            <div>
                <MainViewNavbarComponent/>
                <MainViewContentContainer bookShelf={bookShelf}/>
                <MainViewSearchButtonComponent/>
            </div>
        )
    }
}

export default MyReadsMainViewContainer;