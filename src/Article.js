import React, {Component, Fragment} from 'react';

import CommentList from './CommentList.js'

class Article extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen : false
        };
    }

    toggleOpen = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    };

    getBody() {
        if (!this.state.isOpen) return null;
        const {article} = this.props;
        return (
            <section>
                {article.text}
                <CommentList comments = {article.comments}/>
            </section>
        )
    }

    render() {
        const {article} = this.props;
        const {isOpen} = this.state;

        return (
            <Fragment>
                <h2>{article.title}</h2>
                <button onClick={this.toggleOpen}> { isOpen ? 'Open' : 'Close' } </button>
                <div>
                    {this.getBody()}
                </div>
            </Fragment>
        );
    }
}

export default Article;
