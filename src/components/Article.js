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

    componentWillReceiveProps(nextProps) {
        console.log('___', 'updating', this.props.isOpen, nextProps.isOpen)
    }

    componentWillMount() {
        console.log('___', 'mounting');
    }

    render() {
        const {article, isOpen, toggleOpen} = this.props;

        return (
            <Fragment>
                <div ref={this.setContainerRef}>
                    <h2>{article.title}</h2>
                    <button onClick={toggleOpen}> { isOpen ? 'Open' : 'Close' } </button>
                    <div>
                        {this.getBody()}
                    </div>
                </div>
            </Fragment>
        );
    }

    setContainerRef = ref => {
        this.container = ref;
        console.log('___', ref)
        console.log('___', ref.clientTop)
    };

    componentDidMount(nextProps, nextState) {
        console.log('___', 'mounted')
    }

}

export default toggleOpen(Article);
