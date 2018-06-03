import React, {Component} from 'react';
import PropTypes from 'prop-types';
import CommentsPagination from '../components/CommentsPagination.js';
import {Redirect, Route} from 'react-router-dom';

function CommentsPage({match}) {
    console.log('MATCH');
    console.log(match);
    if (match.isExact) return <Redirect to = '/comments/1' />
    return <Route path = '/comments/:page' render = {getCommentsPaginator} />
}

function getCommentsPaginator({match}) {
    return <CommentsPagination page = {match.params.page}/>
}

// function CommentsPage({match}) {
//     return <CommentsPagination page = {match.params.page}/>
// }

CommentsPage.propTypes = {
};

export default CommentsPage