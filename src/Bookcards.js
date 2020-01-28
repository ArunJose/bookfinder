import React from "react";
import Bookcard from "./Bookcard";
import "./Bookcards.css";

export default class Bookcards extends React.Component {
  render() {
    return (
      <div className="Bookcards">
        {this.props.books.map(book => (
          <Bookcard book={book} key={book.id} />
        ))}
      </div>
    );
  }
}
