import React, {Component} from 'react';

import MainBookComponent from "./MainBookComponent";
import MainEditButton from "./MainEditButton";

class BookDisplayMainContainer extends Component {


    render() {

        const {book,shelfId,handleShelfChange} = this.props

        return(
            <div className="book-display-main-container">
                <MainEditButton book={book} shelfId={shelfId} handleShelfChange={handleShelfChange}/>
                <MainBookComponent book={book}/>
            </div>
        )
    }
}

export default BookDisplayMainContainer;