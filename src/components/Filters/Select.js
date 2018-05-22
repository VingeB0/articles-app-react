import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import {connect} from 'react-redux';
import {changeSelection} from '../../actions'

class SelectFilter extends Component {
    static propTypes = {
        articles: PropTypes.array
    };

    handleChange = (selected) => {
        this.props.changeSelection(selected.map(option => option.value));
        // console.log(selected)
        // console.log(selected.map(option => option.value))
    };

    render() {
        const selectOptions = this.props.articles.map(article => ({
            label: article.title,
            value: article.id
        }));

        return (
            <div>
                <Select
                    options={selectOptions}
                    value={this.props.selected}
                    onChange={this.handleChange}
                    multi
                />
            </div>
        );
    }
}

export default connect(state => ({
    articles: state.articles,
    selected: state.filters.selected
}), {changeSelection})(SelectFilter)
