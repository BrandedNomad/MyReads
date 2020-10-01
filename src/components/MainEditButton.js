import React, {Component} from 'react';


class MainEditButton extends Component {

    constructor(props){
        super(props);
        this.state={
            showMenu:false,

        }
        this.handleMenuClick = this.handleMenuClick.bind(this)
        this.handleMenuItemClick = this.handleMenuItemClick.bind(this)
        this.handleCloseMenuOnExit = this.handleCloseMenuOnExit.bind(this)

    }

    handleMenuClick(){
        this.setState((prevState)=>{
            return {
                showMenu:!prevState.showMenu
            }
        });

    }

    handleMenuItemClick(event){
        this.props.handleShelfChange(this.props.book.id,event.target.value)
    }

    handleCloseMenuOnExit(){
        this.setState((prevState)=>{
            return {
                showMenu:!prevState.showMenu
            }
        });
    }




    render(){
        const {book} = this.props

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
                    <img src="./img/edit-button.png" alt="edit" onClick={this.handleMenuClick}/>
                </div>
                {this.state.showMenu && <div
                    className="main-edit-button_menu-frame"
                    onMouseLeave={this.handleCloseMenuOnExit}
                >
                    <div className="main-edit-button_menu" onChange={(e)=>{this.handleMenuItemClick(e)}}>
                        <ul>
                            {
                                menuElementProperties.map((menuItem,index)=>{

                                    return (
                                        <div  className="menu-item_container" key={index * Math.random() * Math.random() + (0.6782 * Math.random())}>
                                            {book.shelf === menuItem.value ? <input
                                                    type="radio"
                                                    id={menuItem.id}
                                                    name="shelf"
                                                    value={menuItem.value}
                                                    //checked={this.state.checked === menuItem.value}
                                                    defaultChecked
                                                    className="menu-item_input"
                                                    key={index * Math.random() * Math.random() + (0.6782 * Math.random())}
                                                    //onChange={this.handleMenuItemClick}


                                                /> :
                                                <input
                                                    type="radio"
                                                    id={menuItem.id}
                                                    name="shelf"
                                                    value={menuItem.value}
                                                    //checked={this.state.checked === menuItem.value}
                                                    className="menu-item_input"
                                                    //onChange={this.handleMenuItemClick}
                                                    key={index * Math.random() * Math.random() + (0.6782 * Math.random())}
                                                />}
                                            <label
                                                htmlFor={menuItem.id}
                                                className="menu-item_label"
                                            >
                                                {menuItem.text}
                                            </label>
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