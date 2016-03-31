/**
 * Created by mike on 30/03/2016.
 */
import * as types from '../constants/ActionTypes';
import omit from 'lodash/object/omit';
import assign from 'lodash/object/assign';
import mapValues from 'lodash/object/mapValues';



const initialState = {
    comment: [0, 1, 2, 3],
    commentById: {
        1: {
            id: 1,
            nameComment: 'pretty girl)',
            textComment: 'This girl newer see tha father..'
        },

        2: {
            id: 2,
            nameComment: 'bed day!',
            textComment: 'All day goes rain..'
        },
        3: {
            id: 3,
            nameComment: 'i love me',
            textComment: 'I\'m a good boy '
        }
    }
}

export default function comments(state = initialState, action) {
    switch (action.type) {
        case types.ADD_COMMENT:
            const newId = state.comment[state.comment.length - 1] + 1;
            return {
                ...state,
                comment: state.comment.concat(newId),
                commentById: {
                    ...state.commentById,
                    [newId]: {
                        id: newId,
                        nameComment: action.nameComment,
                        textComment: action.textComment
                    }

                }
            }
        case types.DELETE_COMMENT:
            return {
                ...state,
                comment: state.comment.filter(id => id !== action.id),
                commentById: omit(state.commentById, action.id)
            }
        case  types.STAR_COMMENT:
            return {
                ...state,
                commentById: mapValues(state.commentById, (comment) => {
                        return comment.id === action.id ?
                            assign({}, comment, {starred: !comment.starred}) :
                            comment
                    }
                )
            }
        default :
            return state

    }
}
