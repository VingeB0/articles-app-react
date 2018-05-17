import React, {Component} from 'react';
import PropTypes from 'prop-types';
import DataRange from "./DataRange.js";
import SelectFilter from "./Select.js";

class Filters extends Component {
    static propTypes = {
        articles: PropTypes.array
    };

    render() {
        return (
            <div>
                <SelectFilter articles={this.props.articles}/>
                <DataRange/>
            </div>
        );
    }
}

export default Filters;
