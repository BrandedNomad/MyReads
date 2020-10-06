import React, {Component} from 'react';

/**
 * @description Represents the selected book in the main book view
 * @class
 */
class MainBookComponent extends Component{

    /**
     * @description Renders the MainBookComponent
     * @returns {JSX.Element} component
     */
    render(){

        const {book} = this.props

        let longTitleClassName = ""
        let shortTitleClassName = "main-book-card_description_title"
        let titleClassName = ""
        let manyAuthorsClassName=""
        let oneAuthorClassName="main-book-card_description_author"
        let authorClassName

        //Changes the text size of long book titles so that they fit in the car
        if(book.hasOwnProperty('title')){
            if(book.title.length > 30){
                longTitleClassName = "main-book-card_description_title-long"
            }
        }

        titleClassName = longTitleClassName.length > 0 ? longTitleClassName : shortTitleClassName;

        if(book.hasOwnProperty('authors')){
            if(book.authors.length > 1){
                manyAuthorsClassName = "main-book-card_description_author-many"
            }
        }

        authorClassName = manyAuthorsClassName.length > 0 ? manyAuthorsClassName : oneAuthorClassName;


        return (
            <div className="main-book-card">
                <div className="main-book-card_cover">
                    {<img src={book.hasOwnProperty('imageLinks') ? book.imageLinks.thumbnail : "./img/no-cover.jpg"} alt={book.title}/>}
                </div>
                <div className="main-book-card_description">
                    <p className={titleClassName}>{book.hasOwnProperty('title') ? book.title : ""}</p>
                    <ul className="author-list">
                        {book.hasOwnProperty('authors') ? book.authors.map((author)=>{
                            return (<p className={authorClassName} key={author + Math.random()}>
                                {author}
                            </p>)
                        }):""}
                    </ul>

                </div>

            </div>
        )
    }
}

export default MainBookComponent;