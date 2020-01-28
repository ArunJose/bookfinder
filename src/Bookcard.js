import React from "react";
const cardStyle = {
  backgroundColor: "light-grey",
  border: "1px solid grey",
  borderRadius: "5px",
  padding: "20px",
  margin: "20px",
  minHeight: "25em",
  maxHeight: "25em",
  minWidth: "20em",
  maxWidth: "20em",
  float: "right",
  textAlign: "center"
};
const Bookcard = props => {
  const authors = props.book.authors ? props.book.authors : null;
  return (
    <div style={cardStyle}>
      {props.book.imageLinks && (
        <img src={props.book.imageLinks.smallThumbnail} alt="Book Cover" />
      )}
      <h3>{props.book.title}</h3>
      <br />
      {authors && authors.join(", ")}
      <br />
      {props.book.publisher && `Published by ${props.book.publisher}`}
      <br />
      <a href={props.book.infoLink} target="_blank" rel="noopener noreferrer">
        <button>More</button>
      </a>
      <br />
    </div>
  );
};

export default Bookcard;
