import React, { Component } from 'react';
import { RangeSlider } from 'reactrangeslider';
import PropTypes from 'prop-types';

const MIN_VALUE = 0;
const MAX_VALUE = 100;
const STEP_VALUE = 5;
export class RangeSliderComponent extends Component {
    render() {
        return (
            <div className="rangeComponent">
                <h1> Price </h1>
                <h4> Choose from - to </h4>
                <div className="sliderComp">
                    <RangeSlider
                        value={this.props.value}
                        onChange={this.props.onChange}
                        min={MIN_VALUE}
                        max={MAX_VALUE}
                        step={STEP_VALUE}
                    />
                    <div className="row">
                        <div className="col-sm-6">
                            <p className="minPricePar">{this.props.value.start} lv</p>
                        </div>
                        <div className="col-sm-6">
                            <p className="maxPricePar">{this.props.value.end} lv</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

RangeSliderComponent.propTypes = {
    value: PropTypes.object.isRequired,
}