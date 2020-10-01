import React,{Component} from 'react';
import ContentSectionContainer from "./ContentSectionContainer";

class SearchViewContentContainer extends Component {

    render(){

        const {handleBookSelection,handleShelfChange,bookShelf} = this.props

        return(
            <div className="search-view-content-container">
                <ContentSectionContainer
                    title="Search Results"
                    flow="right"
                    books={bookShelf}
                    handleBookSelection={handleBookSelection}
                    shelfId="searchResults"
                    handleShelfChange={handleShelfChange}
                />
            </div>
        )
    }
}

export default SearchViewContentContainer