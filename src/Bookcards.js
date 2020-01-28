import React from "react";
import Bookcard from "./Bookcard";

const style = {
  float: "center",
  padding: "10px",
  textAlign: "center",
  marginLeft: "auto",
  marginRight: "auto",
  display: "inline-block"
};
export default class Bookcards extends React.Component {
  render() {
    return (
      <div style={style}>
        {this.props.books.map(book => (
          <Bookcard book={book} key={book.id} />
        ))}
      </div>
    );
  }
}
