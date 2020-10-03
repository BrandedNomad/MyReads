import React,{Component} from 'react';


class SelectionPanelItemComponent extends Component {

    constructor(props){
        super(props);
        this.state={
            isSelected:false
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(){

        this.props.handleBookSelection(this.props.book.id,this.props.book.shelf)

    }

    render(){

        const {book, handleBookSelection} = this.props;
        let displayTitle = "";

        if(book.hasOwnProperty('title')){
            displayTitle = book.title.length < 50 ? book.title : book.title.slice(0,40) + "..."
        }




        return(
            <div className={book.isSelected ? 'selection-list-item-frame-selected':"selection-list-item-frame"}>
                <div className="selection-list-item-card" onClick={this.handleClick}>
                    <div className="selection-list-item-cover">
                        {<img src={book.hasOwnProperty("imageLinks")?book.imageLinks.thumbnail:"./img/no-cover.jpg"} alt={book.title}/>}
                    </div>
                    <div className="selection-list-item-description">
                        <p className="selection-list-item-description_title">{displayTitle} </p>
                        <p className="selection-list-item-description_author">{book.hasOwnProperty('authors') ? book.authors[0] : ""}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default SelectionPanelItemComponent;