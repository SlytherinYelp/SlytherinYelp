import React, { Component } from 'react';
import { getVolume, getVolumeId } from './BooksAPI/requests';

import './App.css';

import Search from './components/Search';
import Books from './components/Books';

class App extends Component {
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
    getVolumeId(id).then(book => {
      console.log(book);
    });
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
      }, 1000)
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
      <div className="app">
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

export default App;
