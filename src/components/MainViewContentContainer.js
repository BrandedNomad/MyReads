import React,{Component} from 'react';

import ContentSectionContainer from "./ContentSectionContainer";

class MainViewContentContainer extends Component {

    render(){
        return (
            <div className="main-view-content-container">
                <ContentSectionContainer title="Currently Reading" flow="right"/>
                <ContentSectionContainer title="Want to Read" flow="left"/>
                <ContentSectionContainer title="Have Read" flow="right"/>
            </div>
        )
    }
}

export default MainViewContentContainer;