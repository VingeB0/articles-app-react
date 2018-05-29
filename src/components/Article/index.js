import React, {StrictMode, Component, Fragment, PureComponent} from 'react';
import {findDOMNode} from 'react-dom';
import PropTypes from 'prop-types';
import CommentList from '../CommentList.js'
import '../article.css';

import {connect} from 'react-redux';
import {deleteArticle, loadArticle} from '../../actions';

import {CSSTransitionGroup} from 'react-transition-group'
import Loader from '../loader.js'

class Article extends PureComponent {
    static propTypes = {
        article: PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            text: PropTypes.string
        }).isRequired,
        isOpen: PropTypes.bool,
        toggleOpen: PropTypes.func
    };

    // static getDerivedStateFromProps(props, state) {
    //     const {article, isOpen} = props;
    //     console.log('getDerivedStateFromProps');
    //     if (isOpen && !article.text && !article.loading) return loadArticle(article.id)
    // }

    componentWillReceiveProps({isOpen, loadArticle, article}) {
        if (isOpen && !article.text && !article.loading) loadArticle(article.id)
    }

    // componentWillReceiveProps(nextProps) {
    //     // console.log('___', 'updating', this.props.isOpen, nextProps.isOpen)
    // }

    getBody() {
        const {article, isOpen} = this.props;
        if (!isOpen) return null;
        if (article.loading) return <Loader/>;
        return (
            <section>
                {article.text}
                <CommentList article = {article} ref = {this.setCommentRef}/>
            </section>
        )
    }

    componentWillMount() {
        // console.log('___', 'mounting');
    }

    // shouldComponentUpdate(nextProps, nextState) {
    //     // console.log('___nextProps:');
    //     // console.log(nextProps.isOpen);
    //     // console.log('---this.props.isOpen:');
    //     // console.log(this.props.isOpen);
    //     return nextProps.isOpen !== this.props.isOpen
    // }

    handleDelete = () => {
        this.props.deleteArticle(this.props.article.id);
        // console.log(this.props.article.id)
        // console.log(deleteArticl/e(this.props.article.id))
    };

    render() {
        // console.log('sozdavo');

        const {article, isOpen, toggleOpen} = this.props;

        return (
            //<StrictMode>
            <Fragment>
                <div ref={this.setContainerRef}>
                    <h2>{article.title}</h2>
                    <button onClick={toggleOpen}> { isOpen ? 'Open' : 'Close' } </button>
                    <button onClick={this.handleDelete}>delete</button>
                    <div>
                        <CSSTransitionGroup
                            transitionName="article"
                            transitionEnterTimeout={500}
                            transitionLeaveTimeout={300}
                            transitionAppear={true}
                            transitionAppearTimeout={500}
                            component="div">
                            {this.getBody()}
                        </CSSTransitionGroup>
                    </div>
                </div>
            </Fragment>
            //</StrictMode>
        );
    }

    setContainerRef = ref => {
        this.container = ref;
        // if (container) {
            //perform som charting with d3
        // } else {
            //clean up
        // }
        // console.log('___', ref)
        // console.log('___', ref.clientTop)
    };

    setCommentRef = ref => {
        // console.log('___ref', ref)
        // console.log('___findNode', findDOMNode(ref))
    };

    componentDidMount(nextProps, nextState) {
        // console.log('___', 'mounted')
    }

}

export default connect(null, {deleteArticle, loadArticle})(Article);
