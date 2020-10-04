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

    shouldComponentUpdate(nextProps,nextState,nextContext){
        return true;
    }

    resultsToDisplay(from,to){
        return this.props.books.filter((book,i)=>{
            if(i>= from && i<to){
                console.log("2. Fires from resultsToDisplay")
                return book
            }else{
                return null
            }
        })

    }

    async handlePaginationClick(page) {
        let upper = page * 10;
        let lower = upper - 10;
        await this.setState(()=>{
            return {booksToDisplay: this.resultsToDisplay(lower, upper)}
        });

    }




    render(){

        console.log("does it rerender?")



        const {
            books,
            handleBookSelection,
            flow,
        } = this.props

        console.log("books",this.state.booksToDisplay)


        //calculate
        let pageListLength = Math.ceil(this.props.books.length / 10)
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
                                    itemId={i}
                                />
                            )
                        })}
                    </ul>
                </div>
                <div className="pagination-container">
                    <ul className="pagination-list">
                        {
                            pageNumber.map((number,i)=>{

                                return <div
                                    className="pagination-list_item"
                                    key={number}
                                    onClick={async (event)=>{
                                        await this.handlePaginationClick(number)
                                    }}>{number}</div>
                            })
                        }
                    </ul>
                </div>
            </div>
        )
    }
}

export default BookDisplaySelectionPanelContainer;