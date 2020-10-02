import React, {Component} from 'react';

class MainBookComponent extends Component{

    render(){

        const {book} = this.props

        return (
            <div className="main-book-card">
                <div className="main-book-card_cover">
                    {book.hasOwnProperty('imageLinks') && <img src={book.imageLinks.thumbnail} alt={book.title}/>}
                    {!book.hasOwnProperty('imageLinks') && <img src={"https://f.ptcdn.info/995/022/000/1409660109-404notfoun-o.png"} alt={book.title}/>}
                </div>
                <div className="main-book-card_description">
                    <p className="main-book-card_description_title">{book.hasOwnProperty('title') ? book.title : ""}</p>
                    <p className="main-book-card_description_author">{book.hasOwnProperty('authors') ? book.authors[0] : ''}</p>
                </div>

            </div>
        )
    }
}

export default MainBookComponent;