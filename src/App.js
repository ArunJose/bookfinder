import React from "react";
import axios from "axios";
import { API_KEY } from "./config";
import Bookcards from "./Bookcards";
import "./App.css";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: "",
      books: [],
      noOfBooks: 0,
      error: ""
    };
  }
  fetchBooks = async () => {
    const API_URL = `https://www.googleapis.com/books/v1/volumes`;
    axios
      .get(
        `${API_URL}?q=${this.state.searchTerm}&key=${API_KEY}&startIndex=0&maxResults=40`
      )
      .then(res => {
        //console.log(res.data);

        if (res.data.totalItems > 0) {
          let rawBooksData = [...res.data.items];
          console.log(rawBooksData);
          const books = rawBooksData.map(book => ({
            id: book.id,
            publisher: book.volumeInfo.publisher,
            authors: book.volumeInfo.authors,
            infoLink: book.volumeInfo.infoLink,
            title: book.volumeInfo.title,
            imageLinks: book.volumeInfo.imageLinks
          }));
          this.setState(() => ({
            books: books,
            error: "",
            noOfBooks: res.data.totalItems
          }));
        } else {
          this.setState(() => ({
            books: [],
            error: "No books found",
            noOfBooks: 0
          }));
        }
      })
      .catch(e => {
        if (e.message) {
          this.setState(() => ({
            books: [],
            noOfBooks: 0,
            error: e.message
          }));
        } else {
          this.setState(() => ({
            books: [],
            noOfBooks: 0
          }));
        }
      });
  };
  handleInput = e => {
    this.setState({ searchTerm: e.target.value });
  };
  handleSubmit = e => {
    e.preventDefault();
    if (this.state.searchTerm.length === 0) {
      this.setState(() => ({ books: [], error: "Please enter text" }));
    } else {
      this.fetchBooks();
    }
  };
  render() {
    return (
      <div className="App">
        <h1>BOOK FINDER</h1>
        <br />
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="search"
            value={this.state.searchTerm}
            onChange={this.handleInput}
          />
          <br />
          <button>Search</button>
        </form>
        <br />
        {this.state.noOfBooks === 0 || this.state.error ? (
          <p>{this.state.error}</p>
        ) : (
          <Bookcards books={this.state.books} />
        )}
      </div>
    );
  }
}
