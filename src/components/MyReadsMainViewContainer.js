import React,{Component} from 'react';

import MainViewNavbarComponent from "./MainViewNavbarComponent";
import MainViewContentContainer from "./MainViewContentContainer";
import MainViewSearchButtonComponent from "./MainViewSearchButtonComponent";

/**
 *
 * @description Represents the MainView page
 * @class MyReadsMainViewContainer
 */
class MyReadsMainViewContainer extends Component {

    /**
     * @description Renders the MyReadsMainViewContainer
     * @method
     * @returns {JSX.Element} component
     */
    render() {

        const {
            bookShelf,
            handleBookSelection,
            handleShelfChange,
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