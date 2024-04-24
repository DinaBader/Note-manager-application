import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { AddTodoAction } from '@/app/actions/TodoActions';

function AddTodo() {
    const router = useRouter();
    const [todo, setTodo] = useState('');
    const [description, setDescription] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(AddTodoAction(todo, description));
    };

    const handleGoBack = () => {
        router.push('/Index');
    };

    return (
        <div>
            <h1>Add To Do</h1>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text"
                    placeholder="Enter todo"
                    value={todo}
                    onChange={(e) => setTodo(e.target.value)}
                />
                <input 
                    type="text"
                    placeholder="Enter description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <button type="submit">Add</button>
            </form>
            <button onClick={handleGoBack}>Go back</button>
        </div>
    );
}

export default AddTodo;
