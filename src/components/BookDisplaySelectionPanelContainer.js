import React, {Component} from 'react';

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

        return (
            <div className="selection-panel-container">
                <div>
                    <ul className="selection-list">
                        {list.map((listItem)=>{
                            return (
                                <div className="selection-list-item-frame">
                                    <div className="selection-list-item-card">
                                        <div className="selection-list-item-cover">
                                            <img
                                                src={listItem.cover}
                                            />

                                        </div>
                                        <div className="selection-list-item-description">
                                            <p className="selection-list-item-description_title">{listItem.title}</p>
                                            <p className="selection-list-item-description_author">{listItem.author}</p>
                                        </div>
                                    </div>
                                </div>

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