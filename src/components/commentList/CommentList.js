/**
 * Created by mike on 30/03/2016.
 */
import React, { Component, PropTypes } from 'react';
import mapValues from '../../../node_modules/lodash/object/mapValues';
import styles from './../../css/commentList/CommentList.css';
import CommentListItem from './CommentListItem';

export default class CommnetList extends Component {
    static propTypes = {
        comment: PropTypes.object.isRequired,
        actions: PropTypes.object.isRequired
    }

    render() {
        return (
            <ul className={styles.commentList}>
                {
                    mapValues(this.props.comment, (comment) => {
                        return (<CommentListItem
                                key={comment.id}
                                id={comment.id}
                                nameComment={comment.nameComment}
                                textComment={comment.textComment}
                                starred={comment.starred}
                                {...this.props.actions}/>
                        );
                    })
                }
            </ul>
        );
    }
}
