import React, {Component} from 'react';
import './styles/styles.scss';
import {Route} from 'react-router-dom';

import MyReadsMainViewContainer from "./components/MyReadsMainViewContainer";
import MyReadsSearchViewContainer from "./components/MyReadsSearchViewContainer";
import {get,getAll,update,search} from './utils/BooksAPI'

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
            bookShelf:[]

        }

        this.shelveBooks = this.shelveBooks.bind(this)
        this.handleBookSelection = this.handleBookSelection.bind(this);
        this.getBooks = this.getBooks.bind(this)
        this.handleShelfChange = this.handleShelfChange.bind(this)
        this.handleSearchOnChange = this.handleSearchOnChange.bind(this)
        this.handleSearchBookSelection = this.handleSearchBookSelection.bind(this)
    }

    /**
     * @description componentDidMount calls getBooks after initial mount
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
                .then((results)=>{
                    this.setState({booksAll:results})
                })
        }catch(e){
            console.log(e)
        }
    }

    /**
     * @description shelveBooks sorts books from booksAll into their respective shelves (currentlyReading, wantToRead, read)
     * @method
     * @returns {[*[], *[], *[]]} books sorted into shelves
     */
    shelveBooks(){
        const reading = this.state.booksAll.filter((book)=>{
            return book.shelf === 'currentlyReading'
        })

        const wantToRead = this.state.booksAll.filter((book)=>{
            return book.shelf === 'wantToRead'
        })

        const read = this.state.booksAll.filter((book)=>{
            return book.shelf === 'read'
        })

        const bookShelf = [reading, wantToRead, read]

        // const readingList = reading.map((book)=>{
        //     return book.id
        // })
        //
        // const wantToReadList = wantToRead.map((book)=>{
        //     return book.id
        // })
        //
        // const readList = read.map((book)=>{
        //     return book.id
        // })
        //
        // const booksIdList = {
        //     currentlyReading:readingList,
        //     wantToRead:wantToReadList,
        //     read:readList
        // }

        return bookShelf;
    }

    /**
     * @description Highlights selected book from book selection pane with a pink border
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

        console.log(this.state.booksIdList)

    }

    /**
     * @description Moves books from one shelf to another, by updating the API and retrieving a fresh list of books with updated shelf property
     * @method
     * @param {string} bookId - the book's id
     * @param {string} shelfId - the shelf to which the book will be moved
     */
    handleShelfChange(bookId,shelfId){

        //call to BooksAPI to update shelf property
        try{
            update(bookId,shelfId)
                .then((results)=>{
                    this.setState({booksIdList:results})
                })
        }catch(error){
            console.log(error)
        }

        //retrieves fresh list of books with updated properties
        this.getBooks()
    }

    /**
     * @description Updates the searchResults state and controls what is displayed in the search field
     * @method
     * @param {Object} event
     */
    handleSearchOnChange(event){

        //sets the value for the form to the value of query
        if(event.target.value !== undefined || "" ){
            this.setState({searchValue:event.target.value})

            //searches API for books related to the query
            try{
                const searchBooks = async ()=>{
                    let books = await search(event.target.value);
                    return books
                }

                let data = searchBooks()

                data.then((results)=>{

                    //updates the search results shelf property so that is current shelf
                    //is displayed in the drop down menu.
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
                    this.setState({searchResults:updatedResults})
                })

            }catch(error){
                console.log(error)

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

                            />)
                    }}
                />
            </div>
        );
      }

}

export default App;
