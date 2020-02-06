import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from 'reactstrap';
import BookCard from './Components/BookCard'
import FormAdd from './Components/FormAdd'


function App() {

  const [title, setTitle] = useState('')
  const [imageURL, setImageURL] = useState('')

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

    setTitle(data.title)
    setImageURL(data.imageURL)

    setBookList([...bookList, data])

    console.log(bookList);
  }

  let deleteBook = (index) => {
    const ArrBook = bookList.filter((book, i) => {
      return index !== i;
    })
    setBookList(ArrBook)
  }

  let Update = (index) => {
    const ArrBook = bookList.map((book, i) => {
      if (i === index)
        return {
          title,
          imageURL
        };
      else
        return book;
    })
    setBookList(ArrBook)
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
       /////////////////////////////////////////// this is same under
        */}


        {
          bookList.map((book, index) => {
            return (
              <div className="br left"><BookCard key={index} {...book} del={() => { deleteBook(index) }}  update={() => { Update(index) }} /></div>)
          })
        }
      </div>
      <div className="App br">
        <FormAdd onClick={handleChange} />

      </div>
    </>
  );
}

export default App;
