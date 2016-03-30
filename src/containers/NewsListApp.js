/**
 * Created by mike on 28/03/2016.
 */
import React, { Component, PropTypes } from 'react';
import styles from '../css/newsList/NewsListApp.css';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as NewsAction from '../actions/NewsActions';
import { NewsList, AddNewsInput } from '../components';

@connect(state => ({
    newslist: state.newsList
}))
export default class NewsListApp extends Component {

    static propTypes = {
        newsById: PropTypes.object.isRequired,
        dispatch: PropTypes.func.isRequired
    }

    render() {
        const { newslist: { newsById }, dispatch } = this.props;
        const actions = bindActionCreators(NewsAction, dispatch);

        return (
            <div className={styles.newsListApp}>
                <h1>NEWS</h1>
                <AddNewsInput addNews={actions.addNews}/>
                <NewsList news={newsById} actions={actions}/>
            </div>
        );
    }
}
