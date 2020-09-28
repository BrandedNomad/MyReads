import React,{Component} from 'react';

import ContentSectionContainer from "./ContentSectionContainer";

class MainViewContentContainer extends Component {

    render(){
        return (
            <div className="main-view-content-container">
                <ContentSectionContainer title="Currently Reading" flow="right"/>
            </div>
        )
    }
}

export default MainViewContentContainer;