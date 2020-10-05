import React,{Component} from 'react';
import ContentSectionContainer from "./ContentSectionContainer";

/**
 * @description Represents the container for content on the Search-View page
 * @class
 */
class SearchViewContentContainer extends Component {

    /**
     * @description Renders the SearchViewContentContainer
     * @method
     * @returns {JSX.Element} component
     */
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