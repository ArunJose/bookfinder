import React from "react";
import "./Bookcard.css";

const Bookcard = props => {
  const authors = props.book.authors ? props.book.authors : null;
  return (
    <div className="Bookcard">
      <div className="container">
        {props.book.imageLinks && (
          <img src={props.book.imageLinks.smallThumbnail} alt="Book Cover" />
        )}
        <h4>{props.book.title}</h4>
        <i>{authors && `By ${authors.join(", ")}`}</i>
        <br />
        <small>
          {props.book.publisher && `Published by ${props.book.publisher}`}
        </small>
        <br />
        <a href={props.book.infoLink} target="_blank" rel="noopener noreferrer">
          <button>More</button>
        </a>
        <br />
      </div>
    </div>
  );
};

export default Bookcard;
