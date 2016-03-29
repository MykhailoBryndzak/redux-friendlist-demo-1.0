/**
 * Created by mike on 28/03/2016.
 */
import * as types from '../constants/ActionTypes';

export function addNews(name) {
    return {
        type: types.ADD_NEWS,
        name
    }
}

export function deleteNews(id) {
    return {
        type: types.DELETE_NEWS,
        id
    }
}

export function starNews(id) {
    return {
        type: types.STAR_NEWS,
        id
    }
}