import React, {Component, Fragment, PureComponent} from 'react';
import {findDOMNode} from 'react-dom';
import PropTypes from 'prop-types';
import CommentList from '../CommentList.js'
import '../article.css'

import {CSSTransitionGroup} from 'react-transition-group'

class Index extends PureComponent {
    static propTypes = {
        article: PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            text: PropTypes.string
        }).isRequired,
        isOpen: PropTypes.bool,
        toggleOpen: PropTypes.func
    };

    getBody() {
        const {article, isOpen} = this.props;
        if (!isOpen) return null;
        return (
            <section>
                {article.text}
                <CommentList comments = {article.comments} ref = {this.setCommentRef}/>
            </section>
        )
    }

    componentWillReceiveProps(nextProps) {
        // console.log('___', 'updating', this.props.isOpen, nextProps.isOpen)
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

    render() {
        // console.log('sozdavo');

        const {article, isOpen, toggleOpen} = this.props;

        return (
            <Fragment>
                <div ref={this.setContainerRef}>
                    <h2>{article.title}</h2>
                    <button onClick={toggleOpen}> { isOpen ? 'Open' : 'Close' } </button>
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
        );
    }

    setContainerRef = ref => {
        this.container = ref;
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

export default Index;
