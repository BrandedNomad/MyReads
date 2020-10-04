import React, {Component} from 'react';

import BookDisplaySelectionPanelContainer from "./BookDisplaySelectionPanelContainer";
import BookDisplayMainContainer from "./BookDisplayMainContainer";

class contentSectionBookDisplayContainer extends Component {

    constructor(props){
        super(props);
        this.state={
            fade:""
        }

        this.fadeItem = this.fadeItem.bind(this)
        this.unFadeItem = this.unFadeItem.bind(this)
    }

    static getDerivedStateFromProps(props,state){
        if(state.fade === "-fade"){
            return {
                fade:""
            }
        }

        return null;
    }

    fadeItem(){
        this.setState(()=>{
            return {fade:"-fade"}
        })
    }

    unFadeItem(){
        this.setState(()=>{
            return {fade:""}
        })
    }




    render(){

        let {
            flow,
            books,
            handleBookSelection,
            shelfId,
            handleShelfChange,
            handleMenuMethods,
        } = this.props;

        let isSelected = books.every((book)=>{
            return book.isSelected === false || book.isSelected === undefined;
        })

        if(isSelected){
            books = books.map((book,i)=>{
                if(i === 0){
                    book.isSelected = true;
                }
                return book;
            })
        }

        let [mainBook] = books.filter((book)=>{
            return book.isSelected === true;
        })


        return (
            <div className={'book-display-container book-display-container-' + flow}>
                <BookDisplaySelectionPanelContainer
                    books={books}
                    handleBookSelection={handleBookSelection}
                    flow={flow}
                    itemFade={this.state.fade}
                    unFadeItem = {this.unFadeItem}
                />
                <BookDisplayMainContainer
                    book={mainBook}
                    shelfId={shelfId}
                    handleShelfChange={handleShelfChange}
                    flow={flow}
                    handleMenuMethods={handleMenuMethods}
                    handleFade={this.fadeItem}
            />
            </div>
        )
    }
}

export default contentSectionBookDisplayContainer;