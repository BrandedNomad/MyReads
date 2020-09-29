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
            reading:[],
            wantToRead:[],
            read:[]
        }

        this.shelveBooks = this.shelveBooks.bind(this)
        this.handleBookSelection = this.handleBookSelection.bind(this);
    }



    componentDidMount(){


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
                        />)
                }}
            />
            <Route
                exact path='/search'
                render={()=>{
                    return  (<MyReadsSearchViewContainer/>)
                }}
            />
        </div>
    );
  }

}

export default App;
