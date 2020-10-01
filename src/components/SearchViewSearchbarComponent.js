import React, {Component} from 'react';
import {Link} from 'react-router-dom';


class SearchViewSearchbarComponent extends Component {

    render() {

        const {handleSearchOnChange, searchValue} = this.props;

        return (
            <div className="search-bar">
                <div className="search-bar_img">
                    <Link
                        className="navigate-to-home"
                        to="/"
                    >
                        <img src='img/back-button.png' alt='back-button'/>
                    </Link>

                </div>
                <div className="search-bar_input">
                    <input type='text' placeholder='Search by Title or Author' value={searchValue} onChange={(e)=>{handleSearchOnChange(e)}}/>
                </div>
            </div>
        )
    }
}

export default SearchViewSearchbarComponent;