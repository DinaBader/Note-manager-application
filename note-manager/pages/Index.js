"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useSelector, useDispatch } from 'react-redux';
import { DeleteTodoAction } from '@/app/actions/TodoActions';
import { ConfirmDialog } from 'primereact/confirmdialog';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';

function Index() {
    const router = useRouter();
    const Todo = useSelector((state) => state.Todo);
    const { todos } = Todo;
    const dispatch = useDispatch();
    const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
    const [todoToDelete, setTodoToDelete] = useState(null);

    const handleClick = () => {
        router.push('/add');
    };

    const view = (id) => {
        router.push(`/view/${id}`);
    }

    const confirmDelete = (id) => {
        setTodoToDelete(id);
        setShowDeleteConfirmation(true);
    }

    const handleDelete = () => {
        if (todoToDelete) {
            dispatch(DeleteTodoAction(todoToDelete));
            setTodoToDelete(null);
            setShowDeleteConfirmation(false);
        }
    }

    const hideDeleteConfirmation = () => {
        setTodoToDelete(null);
        setShowDeleteConfirmation(false);
    }

    return (
        <div>
            <button onClick={handleClick}>Add todo</button>
            <ul>
                {todos && todos.map((todo) => (
                    <li key={todo.id}>
                        <span onClick={() => view(todo.id)}>{todo.todo}</span>
                        <button>Edit</button>
                        <button onClick={() => confirmDelete(todo.id)}>Delete</button>
                    </li>
                ))}
            </ul>
            
            <ConfirmDialog 
                visible={showDeleteConfirmation} 
                onHide={hideDeleteConfirmation} 
                message="Are you sure you want to delete this todo?" 
                header="Confirmation"
                icon="pi pi-exclamation-triangle"
                accept={handleDelete}
                reject={hideDeleteConfirmation}
            />
        </div>
    );
}

export default Index;
