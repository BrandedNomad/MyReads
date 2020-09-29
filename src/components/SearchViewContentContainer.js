import React,{Component} from 'react';
import ContentSectionContainer from "./ContentSectionContainer";

class SearchViewContentContainer extends Component {

    render(){
        return(
            <div className="search-view-content-container">
                <ContentSectionContainer title="Search Results" flow="right"/>
            </div>
        )
    }
}

export default SearchViewContentContainer