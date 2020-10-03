import React, {Component} from 'react';

import MainBookComponent from "./MainBookComponent";
import MainEditButton from "./MainEditButton";

class BookDisplayMainContainer extends Component {


    render() {

        const {book,shelfId,handleShelfChange,flow, handleMenuMethods} = this.props

        return(
            <div className="book-display-main-container">
                <MainEditButton book={book} shelfId={shelfId} handleShelfChange={handleShelfChange} handleMenuMethods={handleMenuMethods}/>
                <MainBookComponent book={book} flow={flow}/>
            </div>
        )
    }
}

export default BookDisplayMainContainer;