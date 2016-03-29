/**
 * Created by mike on 29/03/2016.
 */
import React, { Component, PropTypes } from 'react';
import calssnames from 'classnames';
import styles from '../../css/newsList/NewsListItem.css';

export default class NewsListItem extends Component {
    static PropTypes = {
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        starred: PropTypes.boolean,
        starNews: PropTypes.func.isRequired,
        onTrashClick: PropTypes.func.isRequired
    }

    render() {
        return (
            <li className={styles.NewsListItem}>
                <div className={styles.newsInfos}>
                    <div><span>{this.props.name}</span></div>
                    <div>{this.props.text}</div>
                </div>

                <div className={styles.newsActions}>
                    <button className={`btn btn-default ${styles.btnAction}`} onClick={() => this.props.starNews(this.props.id)}>
                        <i className={calssnames('fa', {'fa-star': this.props.starred }, {'fa-star-o': !this.props.starred })}/>
                    </button>

                    <button className={`btn btn-default ${styles.btnAction}`} onClick={ () => this.props.deleteNews(this.props.id)}>
                        <i className="fa fa-trash"/>
                    </button>
                </div>
            </li>
        );
    }
    
}