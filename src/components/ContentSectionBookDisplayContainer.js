import React, {Component} from 'react';

import BookDisplaySelectionPanelContainer from "./BookDisplaySelectionPanelContainer";
import BookDisplayMainContainer from "./BookDisplayMainContainer";

class contentSectionBookDisplayContainer extends Component {

    render(){

        let {flow,books, handleBookSelection} = this.props;

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





        console.log(mainBook)

        return (
            <div className={'book-display-container book-display-container-' + flow}>
                <BookDisplaySelectionPanelContainer books={books} handleBookSelection={handleBookSelection}/>
                <BookDisplayMainContainer book={mainBook}/>
            </div>
        )
    }
}

export default contentSectionBookDisplayContainer;