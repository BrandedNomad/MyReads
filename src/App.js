import React, {Component} from 'react';
import './styles/styles.scss';
import {Route} from 'react-router-dom';

import MyReadsMainViewContainer from "./components/MyReadsMainViewContainer";
import MyReadsSearchViewContainer from "./components/MyReadsSearchViewContainer";
import {getAll,update,search} from './utils/BooksAPI'

/**
 *
 */
class App extends Component {

    /**
     * @description Initializes state and binds functions
     * @constructor
     * @param {Object} props
     */
    constructor(props) {
        super(props);
        this.state={
            booksAll:[],
            booksIdList:[],
            searchValue:"",
            searchResults:[],
            bookShelf:[],

        }

        this.shelveBooks = this.shelveBooks.bind(this)
        this.handleBookSelection = this.handleBookSelection.bind(this);
        this.getBooks = this.getBooks.bind(this)
        this.handleShelfChange = this.handleShelfChange.bind(this)
        this.handleSearchOnChange = this.handleSearchOnChange.bind(this)
        this.handleSearchBookSelection = this.handleSearchBookSelection.bind(this)
        this.updateState = this.updateState.bind(this)
        this.setStateSync = this.setStateSync.bind(this)


    }

    static getDerivedStateFromProps(nextState,prevState){
        if(nextState.searchResults !== undefined && nextState.searchResults.length === 0){
            return {
                searchResults:nextState.searchResults
            }
        }
        return null
    }

    /**
     * @description componentDidMount calls getBooks after initial mount which populates screen with books.
     * @method
     */
    componentDidMount(){
        this.getBooks();
    }

    /**
     * @description getBooks retrieves list of books from API and sets booksAll state
     * @method
     */
    getBooks(){
        try{
            getAll()
                .then(async (results)=>{
                    await this.setState({booksAll:results})
                })
        }catch(e){
            console.log(e)
        }

    }

    /**
     * @description shelveBooks sorts books from booksAll into their respective shelves (currentlyReading, wantToRead, read)
     * @method
     * @returns {Array} books sorted into shelves
     */
    shelveBooks(){

        let read = [];
        let reading = [];
        let wantToRead = [];

        this.state.booksAll.forEach((book)=>{
            if(book.shelf === "currentlyReading"){
                reading.push(book)
            }else if(book.shelf === "wantToRead"){
                wantToRead.push(book)
            }else if(book.shelf === "read"){
                read.push(book)
            }else{
                //do nothing
            }
        })

        return [reading, wantToRead, read];
    }

    /**
     * @description Highlights selected book from book selection pane with a pink border when clicked on
     * @method
     * @param {string} id - the id of the book
     * @param {string} shelf - the book's current shelf
     */
    handleBookSelection(id,shelf){

        const updatedlist = this.state.booksAll.map((book)=>{

            if(book.shelf === shelf){
                if(book.id === id){
                    book.isSelected = true;
                } else {
                    book.isSelected = false;
                }
            }

            return book
        })

        this.setState({booksAll:updatedlist})

    }

    /**
     * @description Highlights selected book in selection pane of the search view with a pink border
     * @method
     * @param {string} id - the id of the book
     * @param {string} shelf - the book's current shelf
     */
    handleSearchBookSelection(id,shelf){

        const updatedlist = this.state.searchResults.map((book)=>{

            if(book.id === id){
                book.isSelected = true;
            } else {
                book.isSelected = false;
            }

            return book
        })

        this.setState({booksAll:updatedlist})


    }


    /**
     * @description Moves books from one shelf to another, by updating the API and retrieving a fresh list of books with updated shelf property
     * @method
     * @param {string} bookId - the book's id
     * @param {string} shelfId - the shelf to which the book will be moved
     */
    async handleShelfChange(bookId,shelfId){
        //call to BooksAPI to update shelf property
        try{
            let results = await update(bookId,shelfId)

            this.setState({booksIdLIst:results},()=>{
                this.getBooks()
            })

        }catch(error){
            console.log(error)
        }

    }

    /**
     * @description Helper function that sets state sync instead of async
     * @method
     * @param {object} stateToUpdate -the state to be updated
     * @returns {Promise}
     */
    setStateSync(stateToUpdate){
        return new Promise((resolve)=>{
            this.setState(stateToUpdate,()=>{resolve()})
        })
    }

    /**
     * @description updates state sync instead of async
     * @method
     * @param {object} stateToUpdate -state to be updated
     * @returns {Promise<void>}
     */
    async updateState(stateToUpdate){
            await this.setStateSync(stateToUpdate)
    }


    /**
     * @description Updates the searchResults state and controls what is displayed in the search field
     * @method
     * @param {Object} event
     */
    handleSearchOnChange(event){
        //Sets value to display in Search bar
        this.updateState({searchValue:event.target.value})


        if(event.target.value === "" || event.target.value === undefined){

            this.updateState({searchResults:[]}) //clears the display when the searchbar is empty

        }else{

            try{
                //searches API for books related to the query
                const searchBooks = async ()=>{
                    return await search(event.target.value);
                }

                let data = searchBooks()

                data.then((results)=>{

                    //updates the search results shelf property so that is current shelf
                    //is displayed in the drop down menu.
                    if(!results.error && results !== ""){

                        const updatedResults = results.map((book)=>{

                            this.state.booksAll.forEach((shelvedBook)=>{

                                if(shelvedBook.id === book.id){  //book on shelf?
                                    book.shelf = shelvedBook.shelf //set its shelf
                                }

                            })
                            if(book.shelf === undefined){
                                book.shelf = 'none'
                            }
                            return book
                        })
                        //sets the search result state
                        this.updateState({searchResults:updatedResults})
                    } else {
                        this.updateState({searchResults:[]})
                    }

                }).catch((error)=>{
                    console.log(error)
                })

            }catch(error){
                console.log(error)
                this.updateState({searchResults:[]})
            }
        }



    }



    /**
     * @description Renders the App Component
     * @method
     * @returns {JSX.Element} App
     */
    render(){
        const bookShelf = this.shelveBooks();

        return (
            <div className="App">
                <Route
                    exact path='/'
                    render={()=>{
                        return  (
                            <MyReadsMainViewContainer
                                bookShelf={bookShelf}
                                handleBookSelection={this.handleBookSelection}
                                handleShelfChange={this.handleShelfChange}
                            />)
                    }}
                />
                <Route
                    exact path='/search'
                    render={()=>{
                        return  (
                            <MyReadsSearchViewContainer
                                bookShelf={this.state.searchResults}
                                handleBookSelection={this.handleSearchBookSelection}
                                handleShelfChange={this.handleShelfChange}
                                handleSearchOnChange={this.handleSearchOnChange}
                                searchValue={this.state.searchValue}
                                getBooks={this.getBooks}

                            />)
                    }}
                />
            </div>
        );
      }
}

export default App;
