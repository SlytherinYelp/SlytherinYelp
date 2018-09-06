import React from 'react';
import { Link } from 'react-router-dom';

const Book = ({
  title,
  authors,
  publisher,
  publishedDate,
  description,
  pageCount,
  categories,
  averageRating,
  ratingsCount,
  imageLinks,
  id,
  handleClickBook
}) => {
  return (
    <div className="book">
      <Link to={`/book/${id}`}>
        {imageLinks && <img src={imageLinks.thumbnail} alt={title} className="book__img" />}
        <p className="book__title">{title}</p>
      </Link>
    </div>
  );
};

export default Book;
