import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class ModalContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: "",
            classMsg: "failAdd"
        }
    }

    showModal = () => {
        document.getElementsByClassName("modalWrapper")[0].style.display = 'block';
        document.getElementsByClassName("modalWrapper")[0].style.height = document.body.scrollHeight + "px";
        document.getElementsByClassName("modalBody")[0].style.top = window.pageYOffset + 100 + "px";
        document.body.style.overflow = "hidden";
        this.setState({
            message: "",
            classMsg: "failAdd"
        });
    }

    closeModal = () => {
        document.getElementsByClassName("modalWrapper")[0].style.display = 'none';
        document.body.style.overflow = "auto";
    }

    addBook = (event) => {
        event.preventDefault();
        var title = document.getElementById("title").value;
        var author = document.getElementById("author").value;
        var price = document.getElementById("price").value;
        var typeElement = document.getElementById("type");
        var type = typeElement.options[typeElement.selectedIndex].value;
        var ratingElement = document.getElementById("rating");
        var rating = ratingElement.options[ratingElement.selectedIndex].value;

        if (!title || title.lenght > 50) {
            this.setState({
                message: "Title is required field, max length 50 symbols!",
                classMsg: "failAdd"
            });
            return;
        }

        if (!author || author.lenght > 50) {
            this.setState({
                message: "Author is required field, max length 50 symbols!",
                classMsg: "failAdd"
            });
            return;
        }

        if (!price || price > 100) {
            this.setState({
                message: "Price must be a number with max value of 100",
                classMsg: "failAdd"
            });
            return;
        }

        this.setState({
            message: "You succesfully added this book",
            classMsg: "successAdd"
        });

        document.body.style.overflow = "auto";
        let id = Math.random().toString(16).slice(2);
        let newBook = { id: id, title: title, author: author, type: type, price: price, rating: Number(rating) }
        this.props.handleAddBook(newBook)
        document.getElementById("title").value = "";
        document.getElementById("author").value = "";
        document.getElementById("price").value = "";
        document.getElementById("type").value = "comedy";
        document.getElementById("rating").value = "1";
        setTimeout(() => {
            document.getElementsByClassName("modalWrapper")[0].style.display = 'none';
        }, 1000);
    }

    render() {
        return (
            <div className="modalCont" >
                <button type="button" className="btn btn-success modalButton" onClick={this.showModal}>Add book</button>
                <div className="modalWrapper">
                    <div className="modalBody">
                        <h1 className="modalTitle"> Add a book </h1>
                        <form action="#">
                            <div className="row">
                                <div className="col-sm-6">
                                    <label htmlFor="title">Title</label>
                                </div>
                                <div className="col-sm-6">
                                    <input type="text" name="title" id="title" placeholder="title" maxLength="50" required />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-6">
                                    <label htmlFor="author">Author</label>
                                </div>
                                <div className="col-sm-6">
                                    <input type="text" name="author" id="author" placeholder="author" maxLength="50" required />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-6">
                                    <label htmlFor="price">Price</label>
                                </div>
                                <div className="col-sm-6">
                                    <input min="1" type="number" name="price" id="price" placeholder="price" required />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-6">
                                    <label htmlFor="type">Type</label>
                                </div>
                                <div className="col-sm-6">
                                    <select id="type">
                                        <option value="comedy">comedy</option>
                                        <option value="drama">drama</option>
                                        <option value="history">history</option>
                                        <option value="roman">roman</option>
                                        <option value="science">science</option>
                                        <option value="sport">sport</option>
                                        <option value="horror">horror</option>
                                    </select>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-6">
                                    <p>Select a rating</p>
                                </div>
                                <div className="col-sm-6">
                                    <select id="rating">
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                    </select>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-6">
                                    <button type="button" className="btn btn-danger btnCancel" onClick={this.closeModal}> Cancel </button>
                                </div>
                                <div className="col-sm-6">
                                    <button type="button" className="btn btn-primary btnAddBook" onClick={this.addBook}> Add book </button>
                                </div>
                            </div>
                            <p className={this.state.classMsg}> {this.state.message} </p>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

ModalContainer.propTypes = {
    handleAddBook: PropTypes.func.isRequired,
}