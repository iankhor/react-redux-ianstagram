// reducer takes in two things : action and a copy of current state

export default function posts(state = [], action){
    console.log('post will change')
    console.log(state, action)
    return state
}