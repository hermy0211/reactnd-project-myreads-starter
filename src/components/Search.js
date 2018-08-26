import React from 'react'
import '../App.css'
import {Link} from 'react-router-dom'
import Shelf from './Shelf'

class Search extends React.Component {
  // Function that empties the search results on visiting the page
  componentDidMount() {
    this.props.emptyBooks()
  }

  // Function that renders the search results
  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link
            className="close-search"
            to='/'
          >Close</Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              value={this.props.books.string}
              onChange={this.props.searchQuery}
            />
          </div>
        </div>
        <div className="search-books-results">
          <Shelf
            updateShelf={this.props.updateShelf}
            shelf="Search Results"
            books={this.props.books}
          />
        </div>
      </div>
    )
  }
}

export default Search
