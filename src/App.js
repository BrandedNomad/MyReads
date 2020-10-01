import React, {Component} from 'react';
import logo from './logo.svg';
import './styles/styles.scss';
import {Route} from 'react-router-dom';

import MyReadsMainViewContainer from "./components/MyReadsMainViewContainer";
import MyReadsSearchViewContainer from "./components/MyReadsSearchViewContainer";
import {get,getAll,update,search} from './utils/BooksAPI'

class App extends Component {

    constructor(props) {
        super(props);
        this.state={
            booksAll:[],
            booksIdList:[],
            searchValue:"",
            searchResults:[]
        }

        this.shelveBooks = this.shelveBooks.bind(this)
        this.handleBookSelection = this.handleBookSelection.bind(this);
        this.getBooks = this.getBooks.bind(this)
        this.handleShelfChange = this.handleShelfChange.bind(this)
        this.handleSearchOnChange = this.handleSearchOnChange.bind(this)
        this.handleSearchBookSelection = this.handleSearchBookSelection.bind(this)
    }





    componentDidMount(){
        this.getBooks();

    }

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


        return [reading,wantToRead,read]
    }

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

    handleSearchBookSelection(id,shelf){

        const updatedlist = this.state.searchResults.map((book)=>{

            if(book.id === id){
                book.isSelected = true;
            } else {
                book.isSelected = false;
            }

            return book
        })

        this.setState({searchResults:updatedlist})

    }

    handleShelfChange(bookId,shelfId){
        try{
            update(bookId,shelfId)
                .then((results)=>{
                    this.setState({booksIdList:results})
                })
        }catch(error){
            console.log(error)
        }


        this.getBooks()
    }

    handleSearchOnChange(event){

        if(event.target.value !== undefined || "" ){
            this.setState({searchValue:event.target.value})

            try{
                const searchBooks = async ()=>{
                    let books = await search(event.target.value);
                    return books
                }

                let data = searchBooks()

                data.then((results)=>{
                    this.setState({searchResults:results})
                })

            }catch(error){
                console.log(error)

            }

        }




    }





  render(){
        const bookShelf = this.shelveBooks()

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
