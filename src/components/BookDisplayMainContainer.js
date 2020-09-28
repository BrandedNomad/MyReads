import React, {Component} from 'react';

import MainBookComponent from "./MainBookComponent";
import MainEditButton from "./MainEditButton";

class BookDisplayMainContainer extends Component {

    render() {

        return(
            <div className="book-display-main-container">
                <MainEditButton/>
                <MainBookComponent/>
            </div>
        )
    }
}

export default BookDisplayMainContainer;