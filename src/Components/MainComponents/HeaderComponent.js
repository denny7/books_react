import React, { Component } from 'react';
import bookPicture from '../../photos/book.jpg';

export class Header extends Component {
    render(){
        return(
            <div className="row headerRow">
                <div className="col-lg-2 col-sm-4">
                <img src={bookPicture} alt="book" className="bookPicture"/>
                </div>
                <div className="col-lg-10 col-sm-8 headerTextRow">
                    <h2> Filter : Online shop for books </h2>
                    <h4> Filter by price, type, rating </h4>
                </div>
            </div>
        )
    }
}