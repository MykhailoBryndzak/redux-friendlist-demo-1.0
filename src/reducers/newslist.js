/**
 * Created by mike on 28/03/2016.
 */
import * as types from '../constants/ActionTypes';
import omit from 'lodash/object/omit';
import assign from 'lodash/object/assign';
import mapValues from 'lodash/object/mapValues';


//var time = new Date().toJSON().slice(0, 10);

const initialState = {
    news: [0,1, 2, 3],
    newsById: {
        1: {
            id: 1,
            name: 'ATO (terror)',
            text: 'Roman Poncet returns to' +
            ' Figure with another batch of deadly efficient tools featuring ' +
            'four productions in his stripped-back signature style'
        },
        2: {
            id: 2,
            name: 'Redux (about)',
            text: 'Roman Poncet returns to' +
            ' Figure with another batch of deadly efficient tools featuring ' +
            'four productions in his stripped-back signature style'
        },
        3: {
            id: 3,
            name: 'React (info)',
            text: 'Roman Poncet returns to' +
            ' Figure with another batch of deadly efficient tools featuring ' +
            'four productions in his stripped-back signature style'
        }
    }

};
export default function news (state = initialState, action){
    switch (action.type) {

        case types.ADD_NEWS:
            const newId = state.news[state.news.length - 1] + 1;
            return {
                ...state,
                news: state.news.concat(newId),
                newsById: {
                    ...state.newsById,
                    [newId]: {
                        id: newId,
                        name: action.name,
                        text: action.text
                    }
                }
            }
        case types.DELETE_NEWS:
            return {
                ...state,
                news: state.news.filter(id => id !== action.id),
                newsById: omit(state.newsById, action.id)
            }

        case types.STAR_NEWS:
            return {
                ...state,
                newsById: mapValues(state.newsById, (news) => {
                    return news.id === action.id ?
                        assign({}, news, {starred: !news.starred}) :
                        news
                })
            }
        default:
            return state;
    }

}
