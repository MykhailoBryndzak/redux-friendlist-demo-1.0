/**
 * Created by mike on 30/03/2016.
 */
import React, { Component, PropTypes } from 'react';
import styles from '../css/commentList/commentListApp.css';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as CommentActions from '../actions/CommentActions';
import { CommentList, AddCommentInput } from '../components';

@connect(state => ({
   commentlist: state.commentList
}))
export default class CommentListApp extends Component {
    static propTypes = {
        commentById: PropTypes.object.isRequired,
        dispatch: PropTypes.func.isRequired
    }

    render () {
        const { commentlist: { commentById }, dispatch } = this.props;
        const actions = bindActionCreators(CommentActions, dispatch);

        return (
            <div className={styles.commentListApp}>
                <h1>Comments</h1>
                <AddCommentInput addCommentOne={actions.addCommentOne} />
                <CommentList comment={commentById} actions={actions} />
            </div>
        )
    }
}
