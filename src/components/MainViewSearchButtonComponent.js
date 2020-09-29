import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class MainViewSearchButtonComponent extends Component {

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