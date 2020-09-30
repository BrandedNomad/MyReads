import React, {Component} from 'react';


class MainEditButton extends Component {

    constructor(props){
        super(props);
        this.state={
            showMenu:false
        }
        this.handleClick = this.handleClick.bind(this)
        this.generateMenuContent = this.handleClick.bind(this)



    }

    handleClick(){
        this.setState((prevState)=>{
            return {
                showMenu:!prevState.showMenu
            }
        });

    }






    render(){
        const {book,shelfId} = this.props

        const menuElementProperties = [
            {
                id:"currently-reading",
                value:"currentlyReading",
                text:"Currently Reading"
            },
            {
                id:"want-to-read",
                value:"wantToRead",
                text:"Want to Read"
            },
            {
                id:"read",
                value:"read",
                text:"Read"
            },
            {
                id:"remove-book",
                value:"none",
                text:"Remove"
            }]


        return(
            <div className="main-edit-button">
                <div className="main-edit-button_image">
                    <img src="./img/edit-button.png" alt="edit" onClick={this.handleClick}/>
                </div>
                {this.state.showMenu && <div className="main-edit-button_menu-frame">
                    <div className="main-edit-button_menu" onChange={()=>{console.log("button work",shelfId)}}>
                        <ul>
                            {
                                menuElementProperties.map((menuItem,index)=>{

                                    return (
                                        <div key={index}>
                                            {book.shelf === menuItem.value ? <input
                                                    type="radio"
                                                    id={menuItem.id}
                                                    name="shelf"
                                                    value={menuItem.value}
                                                    defaultChecked
                                                /> :
                                                <input
                                                    type="radio"
                                                    id={menuItem.id}
                                                    name="shelf"
                                                    value={menuItem.value}
                                                />}
                                            <label htmlFor={menuItem.id}>{menuItem.text}</label>
                                        </div>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>}
            </div>

        )
    }
}

export default MainEditButton;