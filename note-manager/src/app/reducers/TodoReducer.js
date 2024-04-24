export const TodoReducer = (state = { todos:[] }, action)=>{
    switch (action.type){
        case "ADD_TODO":
            return {
                ...state,
                todos: [action.payload, ...state.todos], 
            };
        case "REMOVE_TODO":
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.payload),
            };
        case "EDIT_TODO":
            return {
                ...state,
                todos: [action.payload, ...state.todos], 
            };
        default:
            return state;
    }
};
