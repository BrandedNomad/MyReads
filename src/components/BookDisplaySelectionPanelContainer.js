import React, {Component} from 'react';

import SelectionPanelItemComponent from "./SelectionPanelItemComponent";

const list = [
    {
        cover:"https://prodimage.images-bn.com/pimages/9781982115982_p0_v3_s550x406.jpg",
        title:"Pet Sematary",
        author:"Stephen King"
    },
    {
        cover:"https://prodimage.images-bn.com/pimages/9781982115982_p0_v3_s550x406.jpg",
        title:"Pet Sematary",
        author:"Stephen King"
    },
    {
        cover:"https://prodimage.images-bn.com/pimages/9781982115982_p0_v3_s550x406.jpg",
        title:"Pet Sematary",
        author:"Stephen King"
    },
    {
        cover:"https://prodimage.images-bn.com/pimages/9781982115982_p0_v3_s550x406.jpg",
        title:"Pet Sematary",
        author:"Stephen King"
    },
    {
        cover:"https://prodimage.images-bn.com/pimages/9781982115982_p0_v3_s550x406.jpg",
        title:"Pet Sematary",
        author:"Stephen King"
    },
    {
        cover:"https://prodimage.images-bn.com/pimages/9781982115982_p0_v3_s550x406.jpg",
        title:"Pet Sematary",
        author:"Stephen King"
    },
    {
        cover:"https://prodimage.images-bn.com/pimages/9781982115982_p0_v3_s550x406.jpg",
        title:"Pet Sematary",
        author:"Stephen King"
    },
    {
        cover:"https://prodimage.images-bn.com/pimages/9781982115982_p0_v3_s550x406.jpg",
        title:"Pet Sematary",
        author:"Stephen King"
    },
    {
        cover:"https://prodimage.images-bn.com/pimages/9781982115982_p0_v3_s550x406.jpg",
        title:"Pet Sematary",
        author:"Stephen King"
    },
    {
        cover:"https://prodimage.images-bn.com/pimages/9781982115982_p0_v3_s550x406.jpg",
        title:"Pet Sematary",
        author:"Stephen King"
    }
]


class BookDisplaySelectionPanelContainer extends Component {

    render(){



        const {books, handleBookSelection} = this.props;



        return (
            <div className="selection-panel-container">
                <div>
                    <ul className="selection-list">
                        {books.map((book)=>{
                            return (
                                <SelectionPanelItemComponent
                                    book={book}
                                    key={book.id}
                                    handleBookSelection={handleBookSelection}

                                />
                            )
                        })}
                    </ul>
                </div>
                <div className="pagination-container">
                    <img src='img/bread-crumbs.png' alt='crumbs'/>
                </div>
            </div>
        )
    }
}

export default BookDisplaySelectionPanelContainer;