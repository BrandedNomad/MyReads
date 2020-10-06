import React,{Component} from 'react';

import ContentSectionContainer from "./ContentSectionContainer";

/**
 * @description Represents the container for the content-sections in the main view
 * @class
 */
class MainViewContentContainer extends Component {

    /**
     * @description Renders the MainViewContentContainer
     * @method
     * @returns {JSX.Element} component
     */
    render(){

        const {
            bookShelf,
            handleBookSelection,
            handleShelfChange
        }= this.props;

        const containers = [
            ['Currently Reading','right','currentlyReading'],
            ['Want to Read','left', 'wantToRead'],
            ['Have Read','right','read']
        ]


        return (
            <div className="main-view-content-container">
                <ul className="main-view-content-container_ul">
                    {containers.map((container,i)=>{
                        return (<ContentSectionContainer
                            title={container[0]}
                            flow={container[1]}
                            books={bookShelf[i]}
                            handleBookSelection={handleBookSelection}
                            shelfId={container[2]}
                            handleShelfChange={handleShelfChange}
                            key={container[2]}
                        />)
                    })}
                </ul>
            </div>
        )
    }
}

export default MainViewContentContainer;