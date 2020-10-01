import React, {Component} from 'react';

import ContentSectionBookDisplayContainer from './ContentSectionBookDisplayContainer';


class ContentSectionContainer extends Component {



    render(){

        const {title,flow, books, handleBookSelection, shelfId, handleShelfChange} =this.props;

        return (
            <div className="content-section">
                <p className="content-section_title">{title}</p>
                {books.length > 0 ?
                    <ContentSectionBookDisplayContainer
                        flow={flow}
                        books={books}
                        handleBookSelection={handleBookSelection}
                        shelfId={shelfId}
                        handleShelfChange={handleShelfChange}
                    />:
                    <h1>Empty</h1>
                }
            </div>
        )
    }
}

export default ContentSectionContainer;
