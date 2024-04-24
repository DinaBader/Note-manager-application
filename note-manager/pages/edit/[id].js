import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { useSelector, useDispatch } from 'react-redux';
import { EditTodoAction } from '@/app/actions/TodoActions';

function Edit() {
    const router = useRouter();
    const dispatch = useDispatch();
    const { id } = router.query;
    const todo = useSelector((state) => state.Todo.todos.find((item) => item.id === id));
    const [updatedTodo, setUpdatedTodo] = useState(todo ? todo.todo : '');

    const handleInputChange = (event) => {
        setUpdatedTodo(event.target.value);
    };

    const handleEditTodo = () => {
        dispatch(EditTodoAction(id, updatedTodo));
        router.push('/Index');
    };

    const handleGoBack = () => {
        router.push('/Index');
    };

    return (
        <div>
            <h1>Edit Todo</h1>
            <label htmlFor="todoInput">Todo:</label>
            <input
                type="text"
                id="todoInput"
                value={updatedTodo}
                onChange={handleInputChange}
                placeholder={todo ? todo.todo : 'Enter Todo'}
            />
            <button onClick={handleEditTodo}>Save Changes</button>
            <button onClick={handleGoBack}>Go back</button>
        </div>
    );
}

export default Edit;
