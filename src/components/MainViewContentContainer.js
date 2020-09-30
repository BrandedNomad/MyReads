import React,{Component} from 'react';

import ContentSectionContainer from "./ContentSectionContainer";

class MainViewContentContainer extends Component {

    render(){

        const {bookShelf, handleBookSelection}= this.props;

        return (
            <div className="main-view-content-container">
                <ContentSectionContainer title="Currently Reading" flow="right" books={bookShelf[0]} handleBookSelection={handleBookSelection} shelfId="currentlyReading"/>
                <ContentSectionContainer title="Want to Read" flow="left" books={bookShelf[1]} handleBookSelection={handleBookSelection} shelfId="wantToRead"/>
                <ContentSectionContainer title="Have Read" flow="right" books={bookShelf[2]} handleBookSelection={handleBookSelection} shelfId="read"/>
            </div>
        )
    }
}

export default MainViewContentContainer;