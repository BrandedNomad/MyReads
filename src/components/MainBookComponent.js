import React, {Component} from 'react';

class MainBookComponent extends Component{

    render(){

        return (
            <div className="main-book-card">
                <div className="main-book-card_cover">
                    <img
                        src="https://prodimage.images-bn.com/pimages/9781982115982_p0_v3_s550x406.jpg"
                    />

                </div>
                <div className="main-book-card_description">
                    <p className="main-book-card_description_title">Pet Sematary</p>
                    <p className="main-book-card_description_author">Stephen King</p>

                </div>

            </div>
        )
    }
}

export default MainBookComponent;