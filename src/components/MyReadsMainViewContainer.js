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

        const {
            bookShelf,
            handleBookSelection,
            handleShelfChange,
            getBooks
        } = this.props

        return (
            <div>
                <MainViewNavbarComponent/>
                <MainViewContentContainer
                    bookShelf={bookShelf}
                    handleBookSelection={handleBookSelection}
                    handleShelfChange={handleShelfChange}

                />
                <MainViewSearchButtonComponent/>
            </div>
        )
    }
}

export default MyReadsMainViewContainer;