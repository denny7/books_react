import React, {Component} from 'react';
import {Star} from './StarComponent'
import PropTypes from 'prop-types';

export class FilterRating extends Component{
    render(){
        const ONE_STAR = 1
        const TWO_STARS = 2
        const THREE_STARS = 3
        const FOUR_STARS = 4
        const FIVE_STARS = 5

        return(
            <div className="ratingComponent">
                <h1> Rating </h1>
                <h4> Choose rating </h4>
                <div className="starsContainer">
                    <span className={ONE_STAR <= this.props.rating ? "activeStar" : "inactiveStar"} onClick={this.props.handleClickRating.bind(this,ONE_STAR)}>
                        {Star()} 
                    </span>
                    <span className={TWO_STARS <= this.props.rating ? "activeStar" : "inactiveStar"} onClick={this.props.handleClickRating.bind(this,TWO_STARS)}>
                        {Star()} 
                    </span>
                    <span className={THREE_STARS <= this.props.rating ? "activeStar" : "inactiveStar"} onClick={this.props.handleClickRating.bind(this,THREE_STARS)}>
                        {Star()} 
                    </span>
                    <span className={FOUR_STARS <= this.props.rating ? "activeStar" : "inactiveStar"} onClick={this.props.handleClickRating.bind(this,FOUR_STARS)}>
                        {Star()} 
                    </span>
                    <span className={FIVE_STARS <= this.props.rating ? "activeStar" : "inactiveStar"} onClick={this.props.handleClickRating.bind(this,FIVE_STARS)}>
                        {Star()} 
                    </span>
                </div>
            </div>
        )
    }
}

FilterRating.propTypes = {
    rating: PropTypes.number.isRequired,
    handleClickRating: PropTypes.func.isRequired,
}