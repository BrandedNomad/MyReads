import React, {Component} from 'react';

import ContentSectionBookDisplayContainer from './ContentSectionBookDisplayContainer';

/**
 * @description Represents the content section where content is displayed
 * @class
 */
class ContentSectionContainer extends Component {

    /**
     * @description Initializes state and binds functions to component
     * @method
     * @param props
     */
    constructor(props){
        super(props);
        this.state={
            showMenu:false
        }
        this.handleMenuClick = this.handleMenuClick.bind(this)
        this.handleCloseMenuOnExit = this.handleCloseMenuOnExit.bind(this)
    }

    /**
     * @description Opens and closes the drop down menu by toggling the showMenu state
     * @method
     */
    handleMenuClick(){
        this.setState((prevState)=>{
            return {
                showMenu:!prevState.showMenu
            }
        });

    }

    /**
     * @description Closes the drop-down menu on mouse exit by setting showMenu to false
     * @method
     */
    handleCloseMenuOnExit(){
        this.setState((prevState)=>{
            return {
                showMenu:false
            }
        });
    }


    /**
     * @description Renders the Content Section container. If no content, renders an image instead
     * @method
     * @returns {JSX.Element} component
     */
    render(){

        const {
            title,
            flow,
            books,
            handleBookSelection,
            shelfId,
            handleShelfChange,
        } =this.props;

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
