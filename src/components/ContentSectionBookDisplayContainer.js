import React, {Component} from 'react';
import BookDisplaySelectionPanelContainer from "./BookDisplaySelectionPanelContainer";
import BookDisplayMainContainer from "./BookDisplayMainContainer";

/**
 * @description Represents the book display of the Content Section
 * @class
 */
class ContentSectionBookDisplayContainer extends Component {


    /**
     * @description Renders the C
     * @returns {JSX.Element}
     */
    render(){

        let {
            flow,
            books,
            handleBookSelection,
            shelfId,
            handleShelfChange,
            handleMenuMethods,
        } = this.props;

        let isSelected = books.every((book)=>{
            return book.isSelected === false || book.isSelected === undefined;
        })


        if(isSelected){
            books = books.map((book,i)=>{
                if(i === 0){
                    book.isSelected = true;
                }
                return book;
            })
        }

        let [mainBook] = books.filter((book)=>{
            return book.isSelected === true;
        })


        return (
            <div className={'book-display-container book-display-container-' + flow}>
                <BookDisplaySelectionPanelContainer
                    books={books}
                    handleBookSelection={handleBookSelection}
                    flow={flow}
                />
                <BookDisplayMainContainer
                    book={mainBook}
                    shelfId={shelfId}
                    handleShelfChange={handleShelfChange}
                    flow={flow}
                    handleMenuMethods={handleMenuMethods}
            />
            </div>
        )
    }
}

export default ContentSectionBookDisplayContainer;