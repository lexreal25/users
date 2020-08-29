import { ADD_NEWUSER } from '../constants/action-type'

const initialState = {
    users:[]
}

const rootReducer = (state = initialState, action) => {
    if(action.type === ADD_NEWUSER){
        return Object.assign({}, state, {
            users:state.users.concat(action.payload)
        })
    }
    return state;
}

export default rootReducer