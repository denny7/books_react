import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class FilterButton extends Component {
    render(){
        const {handleClickType, name, active} = this.props
        return (
                <button 
                    onClick={handleClickType} 
                    name={name} value={active} 
                    className={active ? "btn btn-success filterBtn" : "btn filterBtn"} > 
                    {this.props.name} 
                </button>
        )
    }
}

FilterButton.propTypes = {
    handleClickType: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    active: PropTypes.bool.isRequired,
}