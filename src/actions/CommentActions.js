/**
 * Created by mike on 30/03/2016.
 */
import * as types from '../constants/ActionTypes';

export function addCommentOne(nameComment, textComment){
    return {
        type: types.ADD_COMMENT,
        nameComment,
        textComment
    }
}

export function deleteComment(id) {
    return {
        type: types.DELETE_COMMENT,
        id
    }
}

export function starComment(id) {
    return {
        type: types.STAR_COMMENT,
        id
    }
}