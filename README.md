# My Reads Project

## Table of Contents

* [Introduction](#introduction)
* [Functionality](#functionality)
* [Run](#run)
* [Structure](#structure)
* [Contributing](#contributing)


## Introduction

This is an app which lets you search books and sort them into three categories : `Currently Reading`, `Want to Read`, and `Read`.


## Functionality

Basic functionality is built, including the following:

- Basic HTML structure
- Basic styling for the app
- Successfully optimized for all types of devices and browser widths
- Feature to search for books
- Feature to add books to your shelf
- Feature to change the shelf of your book


## Run

1. Open the terminal.
2. Clone the repository: `git clone https://github.com/hermy0211/reactnd-project-myreads-starter.git`
3. Open the directory to which you have cloned the repository.
4. Install all project dependencies with `npm install`
5. Run `npm start` to start the development server
6. Open the following webpage : `http://localhost:3000`

- A full list of search terms can be seen in the search terms document. [SEARCH_TERMS.md](SEARCH_TERMS.md)
- Please note that this list of terms are the _only_ terms that will work with the backend.


## Structure
```bash
├── README.md - This file.
├── SEARCH_TERMS.md # Search terms available to use within app
├── package.json # Npm package manager file
├── package-lock.json # Npm package manager file
├── public
│   ├── favicon.ico # React icon favicon file
│   └── index.html # Basic HTML template
└── src
    ├── components
    │   ├── AllShelves.js # Component for rendering the shelves
    │   ├── Search.js # Component for rendering the search page
    │   └── Shelf.js # Component for rendering each shelf
    ├── App.css # Styles for the app
    ├── App.js # The root of the app
    ├── BooksAPI.js # Javascript API file for handling the book database
    ├── icons # Icons for the app
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── index.css # Global styles
    └── index.js # File used for DOM rendering
```


## Contributing

If you have any suggestions to improve this project, feel free to add a pull request and I will see if it seems fit!

1. Fork the project to your own directory.
2. Create a feature branch: `git checkout -b new-feature`
3. Commit your changes: `git commit -m "Explain Feature"`
4. Push to the branch: `git push origin new-feature`
5. Submit a pull request.
