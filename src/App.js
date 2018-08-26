import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import {Route} from 'react-router-dom'
import Search from './components/Search'
import AllShelves from './components/AllShelves'

class BooksApp extends React.Component {
  state = {
    myBooks: [],
    searchedBooks: []
  }

  // Function that loads all of my books onto the page
  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({myBooks: books})
    })
  }

  // Function that updates the shelf of the selected book
  updateShelf = (book, shelf) => {
    // If the shelf is set to 'none', remove it from the array of books displayed
    if (shelf === 'none') {
      this.setState(previousState => ({
        myBooks: previousState.myBooks.filter(b => b.id !== book.id),
      }))
    }
    // If the shelf of the book has been updated, update the array of books displayed accordingly
    if (book.shelf !== shelf) {
      BooksAPI.update(book, shelf)
      .then(() => {
        const myBooksIds = this.state.myBooks.map(b => b.id)
        let newMyBooks = []
        if (myBooksIds.includes(book.id)) {
          newMyBooks = this.state.myBooks.map(b => b.id === book.id ? {...b, shelf} : b)
        } else {
          book.shelf = shelf
          newMyBooks = [...this.state.myBooks, book]
        }
        this.setState({myBooks: newMyBooks})
      })
    }
  }

  // Function that takes the search query and updates the array of searched books
  searchQuery = (event) => {
    const query = event.target.value
    // If there the user has entered a search query, show the search results
    if (query !== '') {
      BooksAPI.search(query)
      .then(searchResults => {
        if (!searchResults || searchResults.error) {
          this.setState({searchedBooks: []})
          return
        }
        const adjustedBooks = searchResults.map(searchResult => {
            this.state.myBooks.forEach(book => {
            if (book.id === searchResult.id) searchResult.shelf = book.shelf
          })
          return searchResult
        })
        this.setState({searchedBooks: adjustedBooks})
      })
    // If nothing has been searched, empty the search results
    } else {
      this.setState({searchedBooks: []})
    }
  }

  // Function that empties the search results
  emptySearch = () => this.setState({searchedBooks: []})

  // Function that renders the view based on the URL
  render() {
    return (
      <div>
        <Route path='/search' render={() =>
          <Search
            books={this.state.searchedBooks}
            updateShelf={this.updateShelf}
            emptyBooks={this.emptySearch}
            searchQuery={this.searchQuery}
          />
        }/>
        <Route exact path='/' render={() =>
          <AllShelves
            books={this.state.myBooks}
            updateShelf={this.updateShelf}
          />
        }/>
      </div>
    )
  }
}

export default BooksApp
