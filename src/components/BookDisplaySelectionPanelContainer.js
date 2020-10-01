import React, {Component} from 'react';

import SelectionPanelItemComponent from "./SelectionPanelItemComponent";


class BookDisplaySelectionPanelContainer extends Component {


    render(){



        const {books, handleBookSelection} = this.props;



        return (
            <div className="selection-panel-container">
                <div>
                    <ul className="selection-list">
                        {books.map((book)=>{
                            return (
                                <SelectionPanelItemComponent
                                    book={book}
                                    key={book.id}
                                    handleBookSelection={handleBookSelection}

                                />
                            )
                        })}
                    </ul>
                </div>
                <div className="pagination-container">
                    <img src='img/bread-crumbs.png' alt='crumbs'/>
                </div>
            </div>
        )
    }
}

export default BookDisplaySelectionPanelContainer;