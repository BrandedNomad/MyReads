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

        return(
            <div className={book.isSelected ? 'selection-list-item-frame-selected':"selection-list-item-frame"}>
                <div className="selection-list-item-card" onClick={this.handleClick}>
                    <div className="selection-list-item-cover">
                        {book.hasOwnProperty('imageLinks') && <img src={book.imageLinks.thumbnail} alt={book.title}/>}
                        {!book.hasOwnProperty('imageLinks') && <img src={"https://f.ptcdn.info/995/022/000/1409660109-404notfoun-o.png"} alt={book.title}/>}
                    </div>
                    <div className="selection-list-item-description">
                        <p className="selection-list-item-description_title">{book.hasOwnProperty('title') ? book.title : ""}</p>
                        <p className="selection-list-item-description_author">{book.hasOwnProperty('authors') ? book.authors[0] : ""}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default SelectionPanelItemComponent;