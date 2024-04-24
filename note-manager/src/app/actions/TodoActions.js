export const AddTodoAction = (todo) => (dispatch,getState) =>{
    const {
        Todo:{todos},
    }=getState;

    //check if the do already exists
    const exists=todos.find(i=>i.todo===todos);

    //if it doesnt exist and todo is not empty
    if(!exists && todo!==''){
        dispatch({
            type:"ADD_TODO",
            payload:[{id:todo, todo}, ...todos],
        });
    }
};