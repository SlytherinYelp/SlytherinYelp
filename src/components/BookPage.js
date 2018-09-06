import React, { Component } from 'react';
import { getVolumeId } from '../BooksAPI/requests';

class BookPage extends Component {
  constructor() {
    super();

    this.state = {};
  }

  componentDidMount() {
    getVolumeId(this.props.match.params.bookId).then(book => {
      this.setState({ ...book.volumeInfo });
    });
  }

  render() {
    const {
      authors,
      averageRating,
      catergories,
      description,
      imageLinks,
      pageCount,
      subtitle,
      title
    } = this.state;

    console.log(imageLinks);

    return (
      <div className="book-page">
        <div className="book-page__landing">
          {imageLinks && <img className="book-page__img" src={imageLinks.extraLarge} alt={title} />}
        </div>
        <div className="book-page__header">
          <span className="book-page__title">{title}</span>
          <span className="book-page__subtitle">{subtitle}</span>
        </div>
        <div className="book-page__description" dangerouslySetInnerHTML={{ __html: description }} />
      </div>
    );
  }
}

export default BookPage;
