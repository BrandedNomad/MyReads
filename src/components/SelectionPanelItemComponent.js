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
                        <img
                            src={book.imageLinks.thumbnail}
                        />

                    </div>
                    <div className="selection-list-item-description">
                        <p className="selection-list-item-description_title">{book.title}</p>
                        <p className="selection-list-item-description_author">{book.authors[0]}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default SelectionPanelItemComponent;