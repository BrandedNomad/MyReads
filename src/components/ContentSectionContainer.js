import React, {Component} from 'react';

import ContentSectionBookDisplayContainer from './ContentSectionBookDisplayContainer';


class ContentSectionContainer extends Component {



    render(){

        const {title,flow, books, handleBookSelection, shelfId} =this.props;

        return (
            <div className="content-section">
                <p className="content-section_title">{title}</p>
                <ContentSectionBookDisplayContainer flow={flow} books={books} handleBookSelection={handleBookSelection} shelfId={shelfId}/>
            </div>
        )
    }
}

export default ContentSectionContainer;
