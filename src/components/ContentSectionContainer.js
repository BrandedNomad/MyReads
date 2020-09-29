import React, {Component} from 'react';

import ContentSectionBookDisplayContainer from './ContentSectionBookDisplayContainer';


class ContentSectionContainer extends Component {



    render(){

        const {title,flow, books} =this.props;

        return (
            <div className="content-section">
                <p className="content-section_title">{title}</p>
                <ContentSectionBookDisplayContainer flow={flow} books={books}/>
            </div>
        )
    }
}

export default ContentSectionContainer;
