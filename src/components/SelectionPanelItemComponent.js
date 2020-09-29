import React,{Component} from 'react';


class SelectionPanelItemComponent extends Component {

    render(){

        const {book} = this.props;

        return(
            <div className="selection-list-item-frame">
                <div className="selection-list-item-card">
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