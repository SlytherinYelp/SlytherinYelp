import React, { Component } from 'react';
import Book from './Book';

const Books = ({ books, handleClickBook }) => {
  return (
    <div className="books">
      {books.map(({ volumeInfo, id }) => {
        return <Book {...volumeInfo} id={id} key={id} handleClickBook={handleClickBook} />;
      })}
    </div>
  );
};

export default Books;
