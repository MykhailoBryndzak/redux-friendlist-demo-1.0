/**
 * Created by mike on 29/03/2016.
 */
import React, { Component, PropTypes } from 'react';
import mapValues from '../../../node_modules/lodash/object/mapValues';
import styles from './../../css/newsList/NewsList.css';
import NewsListItem from './NewsListItem';

export default class NewsList extends Component {
    static propTypes = {
        news: PropTypes.object.isRequired,
        actions: PropTypes.object.isRequired
    }

    render() {
        return (
            <ul className={styles.newsList}>
                {
                    mapValues(this.props.news, (news) => {
                        return (<NewsListItem
                                key={news.id}
                                id={news.id}
                                name={news.name}
                                starred={news.starred}
                                {...this.props.actions}/>
                        );
                    })
                }
            </ul>
        );
    }
}