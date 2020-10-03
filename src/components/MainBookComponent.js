import React, {Component} from 'react';

class MainBookComponent extends Component{

    render(){

        const {book} = this.props

        let displayTitle = "";
        let longTitleClassName = ""
        let shortTitleClassName = "main-book-card_description_title"
        let titleClassName = ""

        if(book.hasOwnProperty('title')){
            if(book.title.length > 30){
                longTitleClassName = "main-book-card_description_title-long"
            }
        }

        titleClassName = longTitleClassName.length > 0 ? longTitleClassName : shortTitleClassName;


        return (
            <div className="main-book-card">
                <div className="main-book-card_cover">
                    {<img src={book.hasOwnProperty('imageLinks') ? book.imageLinks.thumbnail : "./img/no-cover.jpg"} alt={book.title}/>}
                </div>
                <div className="main-book-card_description">
                    <p className={titleClassName}>{book.hasOwnProperty('title') ? book.title : ""}</p>
                    <p className="main-book-card_description_author">{book.hasOwnProperty('authors') ? book.authors[0] : ''}</p>
                </div>

            </div>
        )
    }
}

export default MainBookComponent;