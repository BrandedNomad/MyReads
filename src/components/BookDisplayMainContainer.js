import React, {Component} from 'react';

import MainBookComponent from "./MainBookComponent";
import MainEditButton from "./MainEditButton";

class BookDisplayMainContainer extends Component {

    render() {

        const {book} = this.props

        return(
            <div className="book-display-main-container">
                <MainEditButton/>
                <MainBookComponent book={book}/>
            </div>
        )
    }
}

export default BookDisplayMainContainer;