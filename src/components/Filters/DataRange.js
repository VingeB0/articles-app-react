import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {connect} from 'react-redux';
import {changeDateRange} from '../../actions';

import DayPicker, {DateUtils} from 'react-day-picker';
import 'react-day-picker/lib/style.css';

class DateRange extends Component {

    handleDayClick = (day) => {
        this.props.changeDateRange(DateUtils.addDayToRange(day, this.props.range));
        // console.log(day)
        // console.log(this.props.range.from)
        // console.log(this.props.range.to)
    };

    render() {
        // console.log(this.props);
        const {from, to} =  this.props.range;
        return (
            <div className="data-range">
                <DayPicker
                    // ref="daypicker"
                    // selectedDays={[from, {from, to}]}
                    selectedDays={ day => DateUtils.isDayInRange(day, {from, to})}
                    onDayClick={this.handleDayClick}
                />
                {/*<h2>*/}
                {/*{!from && !to && 'Please select the first day.'}*/}
                {/*{from && !to && 'Please select the last day.'}*/}
                {/*{from && to && `Selected from ${from.toLocaleDateString()} to ${to.toLocaleDateString()}.`}*/}
                {/*</h2>*/}
                <h2>{from && to && `Selected from ${from.toLocaleDateString()} to ${to.toLocaleDateString()}`}</h2>
            </div>
        );
    }
}

export default connect(state => ({
    range: state.filters.dateRange
}), {changeDateRange})(DateRange)