import React, {Component} from 'react';
import MainBookComponent from "./MainBookComponent";
import MainEditButton from "./MainEditButton";

/**
 * @description Represents the container for the Main book Display
 * @class
 */
class BookDisplayMainContainer extends Component {


    /**
     * @description Renders BookDisplayMainContainer component
     * @returns {JSX.Element} component
     */
    render() {
        //Props
        const {
            book,
            shelfId,
            handleShelfChange,
            flow,
            handleMenuMethods,
        } = this.props

        return(
            <div className="book-display-main-container">
                <MainEditButton
                    book={book}
                    shelfId={shelfId}
                    handleShelfChange={handleShelfChange}
                    handleMenuMethods={handleMenuMethods}
                />
                <MainBookComponent book={book} flow={flow}/>
            </div>
        )
    }
}

export default BookDisplayMainContainer;