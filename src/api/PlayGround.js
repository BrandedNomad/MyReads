

const a = [{name:"john", id:1234},{name:"joe", id:5678},{name:"joss", id:9101112},{name:"jess", id:13141516}, ]

const b = [{name:"john",id:1234, shelf:"read"},{name:"joss", id:9101112, shelf:"wantToRead"},]

//retrieve books on shelf



//Is the book on the shelf

const x = a.map((book)=>{

    b.forEach((shelvedBook)=>{
        if(shelvedBook.id === book.id){  //book on shelf?
            book.shelf = shelvedBook.shelf //set its shelf
        }
    })

    return book

})




console.log(x)