import React from 'react'
import '../App.css'
import Shelf from './Shelf'
import {Link} from 'react-router-dom'

class AllShelves extends React.Component {
  // Function that renders each shelf with the associated title
  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <Shelf
              books={this.props.books.filter(book => book.shelf==='currentlyReading')}
              shelf='Currently Reading'
              updateShelf={this.props.updateShelf}
            />
            <Shelf
              books={this.props.books.filter(book => book.shelf === 'wantToRead')}
              shelf='Want to Read'
              updateShelf={this.props.updateShelf}
            />
            <Shelf
              books={this.props.books.filter(book => book.shelf === 'read')}
              shelf='Read'
              updateShelf={this.props.updateShelf}
            />
          </div>
        </div>

        <div className="open-search">
          <Link
            to='/search'
          >Add a book</Link>
        </div>
      </div>
    )
  }
}

export default AllShelves
