import React, {Component} from 'react';

import SelectionPanelItemComponent from "./SelectionPanelItemComponent";



class BookDisplaySelectionPanelContainer extends Component {

    render(){

        const {
            books,
            handleBookSelection,
            flow,
        } = this.props

        return (
            <div className="selection-panel-container">
                <div>
                    <ul className={"selection-list-" + flow}>
                        {books.map((book,i)=>{
                            return (
                                <SelectionPanelItemComponent
                                    book={book}
                                    key={book.id}
                                    handleBookSelection={handleBookSelection}
                                    itemId={i}
                                />
                            )
                        })}
                    </ul>
                </div>
            </div>
        )
    }
}

export default BookDisplaySelectionPanelContainer;