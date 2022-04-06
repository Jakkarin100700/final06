import React, { useState } from "react";
import axios from 'axios';
import Book from '../components/Books';

function SearchBooks() {

  const [word, setWord] = useState([])
  const [result, setResult] = useState([])

  const handleFormSubmit = (event) => {
    event.preventDefault();
    axios.get("https://se-book-store.herokuapp.com/api/v1/books")
    .then((response) => {
      setResult(response.data);
    })
  }

  return (
    <>
      <div className="container">
      <p className="text-center text-light">.</p>
        <h1 className="text-center text-header-h1"> Shop Book By JK</h1>
        <h3 className="text-center text-header-h1"> ร้านหนังสือของเรายินดีต้อนรับและให้บริการครับ</h3>
        <p className="text-center text-light">Create by Jakkarin Khumyaito 624259006 </p>
        <form onSubmit={handleFormSubmit}>
          <div className="fix-input-text input-group text-center">
            <input
              onChange={(e) => setWord(e.target.value)}
              className="form-control"
              type="text"
              placeholder="ข้อความสำหรับการค้นหา"/>
            <div className="input-group-append">
              <button
                type="submit"
                className="btn btn-success px-5">
                ค้นหา
              </button>
            </div>
          </div>
        </form>
      </div>
      <p className="text-center text-light">. </p>
      <Book id={result} search={word} />
    </>
  )
}
export default SearchBooks;