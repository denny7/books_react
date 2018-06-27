import React, { Component } from 'react';
import PropTypes from 'prop-types';
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';

const MIN_VALUE = 0;
const MAX_VALUE = 100;
export class RangeSliderComponent extends Component {
    render() {
        return (
            <div className="rangeComponent">
                <h2> Price </h2>
                <h4> Choose from - to </h4>
                <div className="sliderComp">
                <InputRange
                    maxValue={MAX_VALUE}
                    minValue={MIN_VALUE}
                    value={this.props.value}
                    onChange={this.props.onChange}
                    onChangeComplete={this.props.onChange} />    
                </div>
            </div>
        )
    }
}

RangeSliderComponent.propTypes = {
    value: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired,
}