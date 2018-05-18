import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ArticleList from "./ArticleList.js";
import ArticleChart from "./ArticleChart.js";
import UserForm from "./UserForm.js";
import Filters from './Filters'

import Counter from './Counter.js'

class App extends Component {
    static propTypes = {

    };

    render() {
        return (
            <div>
                <Counter/>
                <UserForm/>
                <Filters articles={[]}/>
                <ArticleList/>
                {/*<ArticleList openItemId={this.props.articles[0].id} />*/}
                {/*<ArticleChart articles={ this.props.articles } />*/}
            </div>
        );
    }
}

export default App;
