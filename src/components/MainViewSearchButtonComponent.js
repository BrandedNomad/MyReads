import React, {Component} from 'react';
import {Link} from 'react-router-dom';

/**
 * @description Represents the Search-button on the main view, that navigates to the search view when click
 * @Class
 */
class MainViewSearchButtonComponent extends Component {

    /**
     * @description Renders the MainViewSearchButtonComponent
     * @method
     * @returns {JSX.Element}
     */
    render(){

        return (
            <div className="main-view-search-button">
                <div className="main-view-search-button-container">
                    <Link
                        className='navigate-to-search'
                        to='/search'
                    >
                        <img className="search-button-img" src='./img/search-button.png' alt='search-button'/>
                    </Link>
                </div>

            </div>
        )
    }
}

export default MainViewSearchButtonComponent;