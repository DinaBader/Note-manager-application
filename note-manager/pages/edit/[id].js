import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { useSelector, useDispatch } from 'react-redux';
import { EditTodoAction } from '@/app/actions/TodoActions';
import "./edits.css"
import "../../src/app/globals.css"

function Edit() {
    const router = useRouter();
    const dispatch = useDispatch();
    const { id } = router.query;
    const todo = useSelector((state) => state.Todo.todos.find((item) => item.id === id));
    const [updatedTodo, setUpdatedTodo] = useState(todo ? todo.todo : '');
    const [updatedDescription, setUpdatedDescription] = useState(todo ? todo.description : '');

    const handleTodoInputChange = (event) => {
        setUpdatedTodo(event.target.value);
    };

    const handleDescriptionInputChange = (event) => {
        setUpdatedDescription(event.target.value);
    };

    const handleEditTodo = () => {
        dispatch(EditTodoAction(id, updatedTodo, updatedDescription));
        router.push('/Index');
    };

    const handleGoBack = () => {
        router.push('/Index');
    };

    return (
        <div>
            <h1 className='flex center'>Edit Todo</h1>
            <div className='flex column'>

                <label htmlFor="todoInput">Todo:</label>
                <input
                    type="text"
                    id="todoInput"
                    value={updatedTodo}
                    onChange={handleTodoInputChange}
                    className='todo'
                />
                <br/>
                <label htmlFor="descriptionInput">Description:</label>
                <input
                    type="text"
                    id="descriptionInput"
                    value={updatedDescription}
                    onChange={handleDescriptionInputChange}
                    className='todo'
                />
            </div>
            <br/>
            <div className='flex center'>
                <button onClick={handleEditTodo} className='btn blue hover'>Save Changes</button>
                <button onClick={handleGoBack} className='btn hover green'>Go back</button>
            </div>
        </div>
    );
}

export default Edit;
