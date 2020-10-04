

const a = [{name:"john", id:1234},{name:"joe", id:5678},{name:"joss", id:9101112},{name:"jess", id:13141516}, ]

const b = [{name:"john",id:1234, shelf:"read"},{name:"joss", id:9101112, shelf:"wantToRead"},]



const resultsToDisplay = (list)=>{

    let results = new Array(Math.ceil(list.length/2))
        .fill()
        .map((_)=>{
            return list.splice(0,2)
        })

    return results
}

let x = resultsToDisplay(a)
let z = x[0].map((item)=>{
    return item.name
})

console.log(z)