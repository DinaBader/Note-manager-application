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
                todos: state.todos.map(todo => {
                    if (todo.id === action.payload.id) {
                        return {
                            ...todo,
                            todo: action.payload.todo,
                            description:action.payload.description
                        };
                    }
                    return todo;
                })
            };
        default:
            return state;
    }
};
