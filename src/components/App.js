import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ArticleList from "./ArticleList";
import ArticleChart from "./ArticleChart";
import UserForm from "./UserForm";
import {fixtures} from "../fixtures";

import Select from 'react-select';
import 'react-select/dist/react-select.css';

class App extends Component {
    static propTypes = {

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

        console.log(this.state.selectText)

        return (
            <div>
                <UserForm/>
                <Select options={selectOptions} value={this.state.selectText} onChange={this.changeSelection} multi />
                <ArticleList articles={ this.props.articles } />
                <ArticleChart articles={ this.props.articles } />
            </div>
        );
    }
}

export default App;
