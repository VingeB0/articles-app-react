import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ArticleList from "./ArticleList.js";
import ArticleChart from "./ArticleChart.js";
import UserForm from "./UserForm.js";
import Filters from './Filters'

class App extends Component {
    static propTypes = {

    };

    render() {
        return (
            <div>
                <UserForm/>
                <Filters articles={ this.props.articles }/>
                <ArticleList articles={ this.props.articles } openItemId={this.props.articles[0].id} />
                <ArticleChart articles={ this.props.articles } />
            </div>
        );
    }
}

export default App;
