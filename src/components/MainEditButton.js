import React, {Component} from 'react';

/**
 * @description Represents the Edit button on the Main book view
 * @class
 */
class MainEditButton extends Component {

    /**
     * @description Initializes state and binds function to component
     * @constructor
     * @param {object} props
     */
    constructor(props){
        super(props);
        this.handleMenuItemClick = this.handleMenuItemClick.bind(this)
    }

    /**
     * @description updates a book's shelf by calling handleShelfChange
     * @method
     * @param {object} event
     */
    handleMenuItemClick(event){
        this.props.handleShelfChange(this.props.book.id,event.target.value)
        this.props.handleMenuMethods.onExit();
    }

    /**
     * @description Renders the MainEditButton component
     * @method
     * @returns {JSX.Element} component
     */
    render(){
        const {
            book,
            handleMenuMethods,
        } = this.props

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
                text:"None"
            }]




        return(
            <div className="main-edit-button">
                <div className="main-edit-button_image">
                    <img className="x" src="./img/edit-button.png" alt="edit" onClick={handleMenuMethods.onClick}/>
                </div>
                {handleMenuMethods.showMenu && <div
                    className={"main-edit-button_menu-frame"}
                    onMouseLeave={handleMenuMethods.onExit}
                >
                    <div
                        className="main-edit-button_menu"
                        onChange={
                            (e)=>{
                                this.handleMenuItemClick(e)
                            }

                        }>
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
                                                    defaultChecked
                                                    className="menu-item_input"
                                                    key={index * Math.random() * Math.random() + (0.6782 * Math.random())}
                                                /> :
                                                <input
                                                    type="radio"
                                                    id={menuItem.id}
                                                    name="shelf"
                                                    value={menuItem.value}
                                                    className="menu-item_input"
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