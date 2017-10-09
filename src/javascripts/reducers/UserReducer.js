const userReducer = (state = {uid : null, username: null}, action) => {
    switch(action.type){
        case "LOGIN":
            state = {
                ...state,
                uid : action.payload.uid,
                username: action.payload.username
            };
            break;
        case "LOGOUT":
            state = {};
            break;
    }

    return state;
};

export default userReducer;