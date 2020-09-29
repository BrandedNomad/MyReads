import React, {Component} from 'react';

class MainBookComponent extends Component{

    render(){

        const {book} = this.props

        return (
            <div className="main-book-card">
                <div className="main-book-card_cover">
                    <img
                        src={book ? book.imageLinks.thumbnail : ''} alt={book ? book.title: ''}
                    />

                </div>
                <div className="main-book-card_description">
                    <p className="main-book-card_description_title">{book ? book.title : ""}</p>
                    <p className="main-book-card_description_author">{book ? book.authors[0] : ''}</p>

                </div>

            </div>
        )
    }
}

export default MainBookComponent;