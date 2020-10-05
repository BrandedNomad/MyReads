import React,{Component} from 'react';


/**
 * @description Represents an individual book in the book selection-panel
 * @class
 */
class SelectionPanelItemComponent extends Component {

    /**
     * @description Initializes state and binds methods to component
     * @constructor
     * @param {object} props
     */
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this)
    }


    /**
     * @description High-lights the selected book when clicked on
     * @method
     */
    handleClick(){
        this.props.handleBookSelection(this.props.book.id,this.props.book.shelf)
    }

    /**
     * @description Renders SelectionPanelItemComponent
     * @method
     * @returns {JSX.Element} component
     */
    render(){

        const {
            book,
            itemId,
        } = this.props;

        let displayTitle = "";

        //Shortens the length of book titles that are longer than 50 characters, so they can fit on the card
        if(book.hasOwnProperty('title')){
            displayTitle = book.title.length < 50 ? book.title : book.title.slice(0,40) + "..."
        }

        return(
            <div id={itemId} className={"item-display"}>
                <div className={book.isSelected ? "selection-list-item-frame-selected": "selection-list-item-frame"}>
                    <div className="selection-list-item-card" onClick={this.handleClick}>
                        <div className="selection-list-item-cover">
                            {<img src={book.hasOwnProperty("imageLinks")? book.imageLinks.thumbnail:"./img/no-cover.jpg"} alt={book.title}/>}
                        </div>
                        <div className="selection-list-item-description">
                            <p className="selection-list-item-description_title">{displayTitle} </p>
                            <p className="selection-list-item-description_author">{book.hasOwnProperty('authors') ? book.authors[0] : ""}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SelectionPanelItemComponent;