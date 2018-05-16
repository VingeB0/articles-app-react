import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ArticleList from "./ArticleList";
import ArticleChart from "./ArticleChart";
import {fixtures} from "../fixtures";

class App extends Component {
    static propTypes = {

    };

    state = {
      inputValue: ''
    };

    handleInputValueChange = (ev) => {
        this.setState({
            inputValue: ev.target.value
        });
    };

    render() {
        console.log(this.state.inputValue);

        return (
            <div>
                Name <input type="text" value={this.state.text} onChange={this.handleInputValueChange} />
                <ArticleList articles={ this.props.articles } />
                <ArticleChart articles={ this.props.articles } />
            </div>
        );
    }
}

export default App;
