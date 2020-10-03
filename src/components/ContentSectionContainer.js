import React, {Component} from 'react';

import ContentSectionBookDisplayContainer from './ContentSectionBookDisplayContainer';


class ContentSectionContainer extends Component {

    constructor(props){
        super(props);
        this.state={
            showMenu:false
        }
        this.handleMenuClick = this.handleMenuClick.bind(this)
        this.handleCloseMenuOnExit = this.handleCloseMenuOnExit.bind(this)
        this.handleMenuClick = this.handleMenuClick.bind(this)
    }

    handleMenuClick(){
        this.setState((prevState)=>{
            return {
                showMenu:!prevState.showMenu
            }
        });

    }

    // handleMenuItemClick(event){
    //     this.props.handleShelfChange(this.props.book.id,event.target.value)
    //     this.setState({showMenu:false})
    // }

    handleCloseMenuOnExit(){
        this.setState((prevState)=>{
            return {
                showMenu:false
            }
        });
    }


    render(){

        const {title,flow, books, handleBookSelection, shelfId, handleShelfChange} =this.props;

        return (
            <div className="content-section" onMouseLeave={this.handleCloseMenuOnExit}>
                <p className="content-section_title">{title}</p>
                {books.length > 0 ?
                    <ContentSectionBookDisplayContainer
                        flow={flow}
                        books={books}
                        handleBookSelection={handleBookSelection}
                        shelfId={shelfId}
                        handleShelfChange={handleShelfChange}
                        handleMenuMethods={{
                            onClick:this.handleMenuClick,
                            onItemClick:this.handleMenuItemClick,
                            onExit:this.handleCloseMenuOnExit,
                            showMenu:this.state.showMenu

                        }}
                    />:
                    <div className="content-section-empty">
                        <img className="content-section-empty_img" src="./img/search-placeholder.jpg" alt="empty"/>
                    </div>
                }
            </div>
        )
    }
}

export default ContentSectionContainer;
