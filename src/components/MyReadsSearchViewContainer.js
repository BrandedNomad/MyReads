import React,{Component} from 'react';

import SearchViewContentContainer from "./SearchViewContentContainer";
import SearchViewSearchbarComponent from "./SearchViewSearchbarComponent";


class MyReadsSearchViewContainer extends Component {

    render(){
        return (
            <div>
                <SearchViewSearchbarComponent/>
                <SearchViewContentContainer/>
            </div>
        )
    }
}


export default MyReadsSearchViewContainer;