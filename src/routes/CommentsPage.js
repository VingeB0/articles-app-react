import React, {Component} from 'react';
import PropTypes from 'prop-types';
import CommentsPagination from '../components/CommentsPagination.js';

function CommentsPage({match}) {
    console.log('MATCH');
    console.log(match);
    return <CommentsPagination page = {match.params.page}/>
}

CommentsPage.propTypes = {
};

export default CommentsPage