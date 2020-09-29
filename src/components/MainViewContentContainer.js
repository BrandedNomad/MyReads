import React,{Component} from 'react';

import ContentSectionContainer from "./ContentSectionContainer";

class MainViewContentContainer extends Component {

    render(){

        const bookShelf = this.props.bookShelf;

        return (
            <div className="main-view-content-container">
                <ContentSectionContainer title="Currently Reading" flow="right" books={bookShelf[0]}/>
                <ContentSectionContainer title="Want to Read" flow="left" books={bookShelf[1]}/>
                <ContentSectionContainer title="Have Read" flow="right" books={bookShelf[2]}/>
            </div>
        )
    }
}

export default MainViewContentContainer;