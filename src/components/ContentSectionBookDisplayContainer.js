import React, {Component} from 'react';

class contentSectionBookDisplayContainer extends Component {

    render(){

        const {flow} = this.props;

        return (
            <div className={'book-display-container book-display-container-' + flow}>
                book display
            </div>
        )
    }
}

export default contentSectionBookDisplayContainer;