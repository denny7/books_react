import React, { Component } from 'react';
import logo from '../../photos/logo.svg';
import {ModalContainer} from './Modal';
import PropTypes from 'prop-types';

export class BooksHolder extends Component {

    render() {
        return (
            <div className="booksContainer row">
                <div className="col-sm-10">
                    <h1> Results </h1>
                    <h4>{this.props.books.length} results </h4>
                </div>
                <ModalContainer className="col-sm-2" handleAddBook={this.props.handleAddBook}/>
                <div className="allBooks">
                    {this.props.books.map(book =>
                        <div className="bookHolder" key={book.id}>
                            <h4> {book.title} </h4>
                            <p> by : {book.author} </p>
                            <p> price : {book.price} </p>
                            <img className="logoPic" src={logo} alt="logo" />
                        </div>
                    )}
                </div>
            </div>
        )
    }
}

BooksHolder.propTypes = {
    books: PropTypes.array.isRequired,
    handleAddBook: PropTypes.func.isRequired,
}