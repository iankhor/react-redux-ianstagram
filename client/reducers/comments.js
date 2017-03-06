// reducer takes in two things : action and a copy of current state

function postComments(state=[], action){
    console.log(action.type)
    switch(action.type){
        case 'ADD_COMMENT':
            return [...state, {
                user: action.author,
                text: action.comment
                }
            ]

        case 'REMOVE_COMMENT':
            console.log('removing comments')
            return [
                ...state.slice(0,action.i),
                ...state.slice(action.i + 1)
            ]

        default:
            return state

    }
    return state
}

export default function comments(state = [], action){
    if(typeof action.postId !== 'undefined'){
        return {
            ...state,
            [action.postId]: postComments(state[action.postId], action)
        }
    }
    return state
}