import React from 'react';

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
    <div className="book" onClick={() => handleClickBook(id)}>
      {imageLinks && <img src={imageLinks.thumbnail} alt={title} className="book__img" />}
      <p className="book__title">{title}</p>
    </div>
  );
};

export default Book;
