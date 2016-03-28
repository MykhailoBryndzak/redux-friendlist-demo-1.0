/**
 * Created by mike on 28/03/2016.
 */
import * as types from '../constants/ActionTypes';

var time = new Date().toJSON().slice(0,10);

const initialState = {
    news: [1, 2, 3],
    newsById: {
        1: {
            id: 1,
            name: 'ATO (terror)',
            date: time,
            text: 'We specified the behavior of our app before we even started writing the UI. ' +
            'We won’t do this in this tutorial, but at this point you can write tests for your reducers and action creators'
        },
        2: {
            id: 2,
            name: 'Redux (about)',
            date: time,
            text: '. You won’t need to mock anything because they are just functions.' +
            ' Call them, and make assertions on what they return.'
        },
        3: {
            id: 3,
            name: 'React (info)',
            date: time,
            text: 'We specified the behavior of our app before we even started writing the UI. ' +
            'We won’t do this in this tutorial, but at this point you can write tests for your reducers and action creators'
        }
    }

};
