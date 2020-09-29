import React,{Component} from 'react';

import ContentSectionContainer from "./ContentSectionContainer";

class MainViewContentContainer extends Component {

    render(){

        const {bookShelf, handleBookSelection}= this.props;

        return (
            <div className="main-view-content-container">
                <ContentSectionContainer title="Currently Reading" flow="right" books={bookShelf[0]} handleBookSelection={handleBookSelection}/>
                <ContentSectionContainer title="Want to Read" flow="left" books={bookShelf[1]} handleBookSelection={handleBookSelection}/>
                <ContentSectionContainer title="Have Read" flow="right" books={bookShelf[2]} handleBookSelection={handleBookSelection}/>
            </div>
        )
    }
}

export default MainViewContentContainer;