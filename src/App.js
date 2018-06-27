import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import { RangeSliderComponent } from './Components/FilterBook/FilterSlider';
import { FilterRating } from './Components/FilterBook/FIlterRating'
import { BooksHolder } from './Components/MainComponents/BooksComponent';
import { CategoryComponent } from './Components/MainComponents/CategoryComponent';
import myData from './DB.json';
import { Header } from './Components/MainComponents/HeaderComponent';

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      books: myData.books,
      filters: [
        { value: "comedy", active: true },
        { value: "drama", active: true },
        { value: "history", active: false },
        { value: "roman", active: false },
        { value: "science", active: false },
        { value: "sport", active: false },
        { value: "horror", active: true },
      ],
      activeBooks: [],
      sliderValues: { min: 0, max: 100 },
      rating: 4
    }
  }

  componentDidMount() {
    this.enableAllFilters();
  }

  enableAllFilters = () => {
    let list = this.getFIlteredBooksByType();
    list = this.getFilteredBooksByPrice(list);
    this.getFilteredBooksByRating(list);
  }

  getFIlteredBooksByType = () => {
    const allBooks = [...this.state.books];
    const filters = [...this.state.filters];
    const activeFilterArr = filters.filter(filterType => filterType.active);
    const activeBooks = [];
    activeFilterArr.map(currentFilter => this.filterBooksByType(allBooks, currentFilter.value).forEach(book => activeBooks.push(book)));
    this.setState({ activeBooks: activeBooks });
    return activeBooks;
  }

  getFilteredBooksByPrice = (list) => {
    const minPrice = this.state.sliderValues.min;
    const maxPrice = this.state.sliderValues.max;
    const filteredBooksByPrice = list.filter(book => (book.price >= minPrice && book.price <= maxPrice));
    this.setState({ activeBooks: filteredBooksByPrice });
    return filteredBooksByPrice;
  }

  getFilteredBooksByRating = (list) => {
    const rating = this.state.rating;
    const allBooks = list.filter(book => book.rating === rating);
    this.setState({ activeBooks: allBooks });
    return allBooks;
  }

  handleClickType = (event) => {
    const filters = [...this.state.filters];
    const filterName = event.target.name;
    const filterIndex = filters.findIndex(filter => filter.value === filterName);
    const stateBtn = !filters[filterIndex].active;
    filters[filterIndex].active = stateBtn;
    this.setState({ filters: filters }, () => {
      this.enableAllFilters();
    });
  }

  handleChangeSlider = (event) => {
    this.setState({ sliderValues: event }, () => {
      this.enableAllFilters();
    });
  }

  filterBooksByType = (list, type) => {
    return list.filter(book => book.type === type);
  }

  handleClickRating = (data) => {
    this.setState({ rating: data }, () => {
      this.enableAllFilters();
    });
  }

  handleAddBook = (data) => {
    let books = this.state.books;
    books.push(data);
    this.setState({ books: books }, () => {
      this.enableAllFilters();
    });
  }

  render() {
    return (
      <div className="App container">
        <Header />
        <CategoryComponent filters={this.state.filters} handleClickType={this.handleClickType} />
        <div className="row">
          <div className="col-sm-6 priceContainer">
            <RangeSliderComponent onChange={this.handleChangeSlider} value={this.state.sliderValues} />
          </div>
          <div className="col-sm-6 ratingContainer">
            <FilterRating rating={this.state.rating} handleClickRating={this.handleClickRating} />
          </div>
        </div>
        <BooksHolder books={this.state.activeBooks} handleAddBook={this.handleAddBook} />
      </div>
    );
  }
}

