import React, {Component} from 'react';
import PropTypes from 'prop-types';

class ArticleChart extends Component {
    static propTypes = {

    };

    componentDidMount() {
        //d3 works with this.ref.chart
    }

    componentWillReceiveProps(nextProps) {
        //update chart for new article
    }

    render() {
        return <div ref = "chart" />
    }

    componentWillUnmount() {
        //do some cleanup
    }

}

export default ArticleChart;
