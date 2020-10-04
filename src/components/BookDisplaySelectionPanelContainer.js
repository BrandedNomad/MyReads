import React, {Component} from 'react';

import SelectionPanelItemComponent from "./SelectionPanelItemComponent";


class BookDisplaySelectionPanelContainer extends Component {

    constructor(props) {
        super(props);
        this.state={
            books:this.props.books,
            booksToDisplay:this.resultsToDisplay(0,10)
        }

        this.resultsToDisplay = this.resultsToDisplay.bind(this)
        this.handlePaginationClick = this.handlePaginationClick.bind(this)
    }


    resultsToDisplay(from,to){
        return this.props.books.filter((book,i)=>{
            if(i>= from && i<to){
                return book
            }
        })
    }

    handlePaginationClick(page){
        let upper = page * 10;
        let lower = upper - 10;


        this.setState(()=>{
            return {
                booksToDisplay:this.resultsToDisplay(lower,upper)
            }
        })

    }

    render(){

        const {
            books,
            handleBookSelection,
            flow,
            itemFade,
            unFadeItem
        } = this.props;

        console.log("amount of books",this.state.books)




        //calculate
        let pageListLength = Math.ceil(this.state.books.length / 10)
        let pageNumber=[]
        for(let i =0; i < pageListLength;i++){
            pageNumber.push(i+1);
        }




        return (
            <div className="selection-panel-container">
                <div>
                    <ul className={"selection-list-" + flow}>
                        {this.state.booksToDisplay.map((book,i)=>{
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
                    <ul className="pagination-list">
                        {
                            pageNumber.map((number,i)=>{



                                return <a
                                    className="pagination-list_item"
                                    key={number}
                                    name={number}
                                    onClick={(event)=>{
                                        this.handlePaginationClick(number)
                                    }}>{number}</a>
                            })
                        }
                    </ul>
                </div>
            </div>
        )
    }
}

export default BookDisplaySelectionPanelContainer;