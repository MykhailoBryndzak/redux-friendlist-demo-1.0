/**
 * Created by mike on 30/03/2016.
 */
import React, { Component, PropTypes } from 'react';
import calssnames from 'classnames';
import styles from '../../css/commentList/CommentListItem.css';

export default class CommentListItem extends Component {
    static propTypes = {
        id: PropTypes.number.isRequired,
        nameComment: PropTypes.string.isRequired,
        textComment: PropTypes.string.isRequired,
        starred: PropTypes.boolean,
        starComment: PropTypes.func.isRequired,
        onTrashClick: PropTypes.func.isRequired
    }

    render() {
        return (
            <li className={styles.commentListItem}>
                <div className={styles.commentInfo}>
                    <div><p><h4>{this.props.nameComment}</h4></p></div>
                    <div>{this.props.textComment}</div>
                </div>

                <div className={styles.commentActions}>
                    <button className={`btn btn-default ${styles.btnAction}`} onClick={() => this.props.starComment(this.props.id)}>
                        <i className={calssnames('fa', {'fa-star': this.props.starred }, {'fa-star-o': !this.props.starred })}/>
                    </button>

                    <button className={`btn btn-default ${styles.btnAction}`} onClick={ () => this.props.deleteComment(this.props.id)}>
                        <i className="fa fa-trash"/>
                    </button>
                </div>
                <br />
            </li>
        );
    }

}
