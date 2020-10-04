import React, {Component} from 'react';

import SelectionPanelItemComponent from "./SelectionPanelItemComponent";


class BookDisplaySelectionPanelContainer extends Component {



    render(){



        const {
            books,
            handleBookSelection,
            flow,
            itemFade,
            unFadeItem
        } = this.props;


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
                                    itemFade={itemFade}
                                    itemId={i}
                                    unFadeItem={unFadeItem}

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