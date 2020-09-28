import React, {Component} from 'react';

import ContentSectionBookDisplayContainer from './ContentSectionBookDisplayContainer';


class ContentSectionContainer extends Component {



    render(){

        const {title,flow} =this.props;

        return (
            <div className="content-section">
                <p className="content-section_title">{title}</p>
                <ContentSectionBookDisplayContainer flow={flow}/>
            </div>
        )
    }
}

export default ContentSectionContainer;
