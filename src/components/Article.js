import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import CommentList from './CommentList.js'

import toggleOpen from '../decorators/toggleOpen.js'

class Article extends Component {
    static propTypes = {
        article: PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            text: PropTypes.string
        }).isRequired
    };

    getBody() {
        const {article, isOpen} = this.props;
        if (!isOpen) return null;
        return (
            <section>
                {article.text}
                <CommentList comments = {article.comments}/>
            </section>
        )
    }

    render() {
        const {article, isOpen, toggleOpen} = this.props;

        return (
            <Fragment>
                <h2>{article.title}</h2>
                <button onClick={toggleOpen}> { isOpen ? 'Open' : 'Close' } </button>
                <div>
                    {this.getBody()}
                </div>
            </Fragment>
        );
    }
}

export default toggleOpen(Article);
