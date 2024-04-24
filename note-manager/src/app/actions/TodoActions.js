export const AddTodoAction = (todo, description) => (dispatch, getState) => {
    const {
        Todo: { todos },
    } = getState();

    // Check if the todo already exists
    const exists = todos.find((item) => item.todo === todo);

    // If it doesn't exist and todo is not empty
    if (!exists && todo !== '') {
        dispatch({
            type: "ADD_TODO",
            payload: {
                id: Math.random().toString(36).substr(2, 9),
                todo: todo,
                description: description,
            },
        });
    }
};

export const DeleteTodoAction = (id) => (dispatch) => {

    dispatch({
        type: "REMOVE_TODO",
        payload: id, 
    });
};
