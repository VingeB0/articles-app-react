import {increment} from '../actionCreators'

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux'

class Counter extends Component {
    static propTypes = {
        counter: PropTypes.number,
        increment: PropTypes.func
    };

    handleIncrement = () => {
        this.props.increment()
    };

    render() {
        return (
            <div>
                <button onClick={this.handleIncrement}>Decrement</button>
                <h1>{this.props.counter}</h1>
                <button onClick={this.handleIncrement}>Increment</button>
            </div>
        );
    }
}

// function mapStateToProps (state) {
//     return {
//         counter: state.count
//     }
// }
//
// const mapToDispatch = { increment };
//
// export default connect(mapStateToProps, mapToDispatch)(Counter);

export default connect((state) => ({
    counter: state.count
}), {increment})(Counter);
