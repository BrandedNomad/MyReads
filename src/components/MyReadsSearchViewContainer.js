import React,{Component} from 'react';

import SearchViewContentContainer from "./SearchViewContentContainer";
import SearchViewSearchbarComponent from "./SearchViewSearchbarComponent";
import ContentSectionContainer from "./ContentSectionContainer";


class MyReadsSearchViewContainer extends Component {

    render(){
        return (
            <div>
                <SearchViewSearchbarComponent/>

            </div>
        )
    }
}


export default MyReadsSearchViewContainer;