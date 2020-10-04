import React,{Component} from 'react';

import ContentSectionContainer from "./ContentSectionContainer";

class MainViewContentContainer extends Component {

    render(){

        const {
            bookShelf,
            handleBookSelection,
            handleShelfChange
        }= this.props;

        return (
            <div className="main-view-content-container">
                <ContentSectionContainer
                    title="Currently Reading"
                    flow="right"
                    books={bookShelf[0]}
                    handleBookSelection={handleBookSelection}
                    shelfId="currentlyReading"
                    handleShelfChange={handleShelfChange}

                />
                <ContentSectionContainer
                    title="Want to Read"
                    flow="left" books={bookShelf[1]}
                    handleBookSelection={handleBookSelection}
                    shelfId="wantToRead"
                    handleShelfChange={handleShelfChange}

                />
                <ContentSectionContainer
                    title="Have Read" flow="right"
                    books={bookShelf[2]}
                    handleBookSelection={handleBookSelection}
                    shelfId="read"
                    handleShelfChange={handleShelfChange}

                />
            </div>
        )
    }
}

export default MainViewContentContainer;