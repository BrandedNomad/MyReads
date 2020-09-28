import React, {Component} from 'react';

import BookDisplaySelectionPanelContainer from "./BookDisplaySelectionPanelContainer";
import BookDisplayMainContainer from "./BookDisplayMainContainer";

class contentSectionBookDisplayContainer extends Component {

    render(){

        const {flow} = this.props;

        return (
            <div className={'book-display-container book-display-container-' + flow}>
                <BookDisplaySelectionPanelContainer/>
                <BookDisplayMainContainer/>
            </div>
        )
    }
}

export default contentSectionBookDisplayContainer;