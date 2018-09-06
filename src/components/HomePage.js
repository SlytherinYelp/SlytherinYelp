import React, { Component } from 'react';

import { getVolume, getVolumeId } from '../BooksAPI/requests';

import Search from './Search';
import Books from './Books';

class HomePage extends Component {
  constructor() {
    super();

    this.state = {
      books: [],
      search: '',
      timer: null
    };

    this.handleClickBook = this.handleClickBook.bind(this);
    this.handleOnChangeSearch = this.handleOnChangeSearch.bind(this);
    this.handleOnClickSearch = this.handleOnClickSearch.bind(this);
  }

  componentDidMount() {
    const { search } = this.state;

    getVolume(search).then(({ items }) => {
      this.setState({ books: items });
    });
  }

  handleClickBook(id) {
    console.log(id);
  }

  handleOnChangeSearch(e) {
    const { value } = e.target;
    const { timer } = this.state;

    clearTimeout(timer);

    this.setState(() => ({
      search: value,
      timer: setTimeout(() => {
        getVolume(value).then(({ items }) => {
          this.setState({ books: items });
        });
      }, 400)
    }));
  }

  handleOnClickSearch(e) {
    e.preventDefault();
    const { value } = e.target.elements[0];
    const { timer } = this.state;

    clearTimeout(timer);

    getVolume(value).then(({ items }) => {
      this.setState({ books: items });
    });
  }

  render() {
    const { books, search } = this.state;

    return (
      <div className="home-page">
        <Search
          search={search}
          handleOnChangeSearch={this.handleOnChangeSearch}
          handleOnClickSearch={this.handleOnClickSearch}
        />
        <Books books={books} handleClickBook={this.handleClickBook} />
      </div>
    );
  }
}

export default HomePage;
