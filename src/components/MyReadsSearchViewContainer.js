import React,{Component} from 'react';

import SearchViewContentContainer from "./SearchViewContentContainer";
import SearchViewSearchbarComponent from "./SearchViewSearchbarComponent";


/**
 * @description Represents the Search-View page
 * @class
 */
class MyReadsSearchViewContainer extends Component {

    /**
     * @description Renders the MyReadsSearchViewContainer
     * @method
     * @returns {JSX.Element} component
     */
    render(){

        const {
            bookShelf,
            handleBookSelection,
            handleShelfChange,
            handleSearchOnChange,
            searchValue,
        } = this.props

        return (
            <div>
                <SearchViewSearchbarComponent handleSearchOnChange={handleSearchOnChange} searchValue={searchValue}/>
                <SearchViewContentContainer
                    bookShelf={bookShelf}
                    handleBookSelection={handleBookSelection}
                    handleShelfChange={handleShelfChange}
                />

            </div>
        )
    }
}


export default MyReadsSearchViewContainer;