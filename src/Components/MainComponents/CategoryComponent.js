import React, { Component } from 'react';
import { FilterButton } from '../FilterBook/FilterButton';
import PropTypes from 'prop-types';

export class CategoryComponent extends Component {
    render() {
        const { handleClickType, filters } = this.props
        return (
            <div className="categoryHolder row">
                <div className="col-sm-12">
                    <h1> Type </h1>
                </div>
                <div className="col-sm-12">
                    <h4> Click on one or more buttons to select type </h4>
                </div>
                <div className="col-sm-12">
                    <FilterButton name="comedy" handleClickType={handleClickType} active={filters[0].active} />
                    <FilterButton name="drama" handleClickType={handleClickType} active={filters[1].active} />
                    <FilterButton name="history" handleClickType={handleClickType} active={filters[2].active} />
                    <FilterButton name="roman" handleClickType={handleClickType} active={filters[3].active} />
                    <FilterButton name="science" handleClickType={handleClickType} active={filters[4].active} />
                    <FilterButton name="sport" handleClickType={handleClickType} active={filters[5].active} />
                    <FilterButton name="horror" handleClickType={handleClickType} active={filters[6].active} />
                </div>
            </div>
        )
    }
}

CategoryComponent.propTypes = {
    handleClickType: PropTypes.func.isRequired,
    filters: PropTypes.array.isRequired,
}