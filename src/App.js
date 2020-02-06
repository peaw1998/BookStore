import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from 'reactstrap';
import BookCard from './Components/BookCard'
import FormAdd from './Components/FormAdd'

// const bookList = [
//   {
//     title: "Harry Potter",
//     imageURL: "https://upload.wikimedia.org/wikipedia/th/thumb/f/f1/Hp7childus.jpg/220px-Hp7childus.jpg"
//   },
//   {
//     title: "Harry Potter 2",
//     imageURL: "https://readery.co/media/catalog/product/cache/1/small_image/360x/17f82f742ffe127f42dca9de82fb58b1/0/0/003_64.jpg"
//   },
// ]

function App() {

  let [bookList, setBookList] = useState([
    {
      title: "Harry Potter",
      imageURL: "https://upload.wikimedia.org/wikipedia/th/thumb/f/f1/Hp7childus.jpg/220px-Hp7childus.jpg"
    },
    {
      title: "Harry Potter 2",
      imageURL: "https://readery.co/media/catalog/product/cache/1/small_image/360x/17f82f742ffe127f42dca9de82fb58b1/0/0/003_64.jpg"
    },
  ])

  let handleChange = (data) => {
    setBookList([...bookList, data])

    console.log(bookList);
  }



  return (
    <>
      <div className="App">
        {/*
        <div className="br">
          <BookCard {...bookList[0]}/>
        </div>
        <div className="br">
           <BookCard {...bookList[1]}/>
        </div> 
       /////////////////////////////////////// this is same under
        */}

        {
          bookList.map((book, index) => {
            return (
              <div className="br left"><BookCard key={index} {...book} /></div>)
          })
        }
      </div>
      {/* <div className="App br">
        <Button color="primary" className="button" onClick={handleChange}>Create</Button>
      </div> */}
      <div className="App br">
        <FormAdd onClick={handleChange}/>
      </div>
    </>
  );
}

export default App;
