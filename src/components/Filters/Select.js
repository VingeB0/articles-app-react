import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

class SelectFilter extends Component {
    static propTypes = {
        articles: PropTypes.array
    };

    state = {
        selectText: null
    };

    changeSelection = (selectText) => {
        this.setState({
            selectText
        });
    };

    render() {
        const selectOptions = this.props.articles.map(article => ({
            label: article.title,
            value: article.id
        }));

        return (
            <div>
                <Select options={selectOptions} value={this.state.selectText} onChange={this.changeSelection} multi />
            </div>
        );
    }
}

export default SelectFilter;
