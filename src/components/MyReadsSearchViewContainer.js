import React,{Component} from 'react';

import SearchViewContentContainer from "./SearchViewContentContainer";
import SearchViewSearchbarComponent from "./SearchViewSearchbarComponent";



class MyReadsSearchViewContainer extends Component {






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