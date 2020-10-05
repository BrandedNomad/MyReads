import React,{Component} from 'react';

/**
 * @description Represents the Navigation bar in the main view
 * @class
 */
class MainViewNavbarComponent extends Component {

    /**
     * @description Renders MainViewNavbarComponent
     * @returns {JSX.Element} component
     */
    render(){
        return (
            <div className="navbar">
                <span className="navbar_title">MyReads</span>
            </div>
        )
    }
}

export default MainViewNavbarComponent;