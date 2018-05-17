import React, {Component} from 'react';
import PropTypes from 'prop-types';

import DayPicker, {DateUtils} from 'react-day-picker';
import 'react-day-picker/lib/style.css';

class DataRange extends Component {
    constructor() {
        super();
        this.state = {
            from: null,
            to: null
        }
    }

    handleDayClick = (day) => {
        this.setState(
            DateUtils.addDayToRange(day, this.state)
        );
    };

    // selectedRange = () => {
    //     const {from, to} = this.state;
    //
    //         </p>
    //     } else {
    //         return <p>{from && !to && 'Please select the first day.'}</p>
    //     } else {
    //         return <p>{'from: ' + from + 'to: ' + to}</p>
    //     }
    // };

    render() {
        const {from, to} = this.state;
        // console.log(from);
        // console.log(to);

        return (
            <div>
                <DayPicker
                    selectedDays={[from, {from, to}]}
                    onDayClick={this.handleDayClick}
                />
                <h2>
                    {!from && !to && 'Please select the first day.'}
                    {from && !to && 'Please select the last day.'}
                    {from && to && `Selected from ${from.toLocaleDateString()} to ${to.toLocaleDateString()}.`}
                </h2>
            </div>
        );
    }
}

export default DataRange;
