"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useSelector, useDispatch } from 'react-redux';
import { DeleteTodoAction } from '@/app/actions/TodoActions';
import { ConfirmDialog } from 'primereact/confirmdialog';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import "../src/app/globals.css"
import "./index.css";

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
            <h2 className='flex center'>Note Manager</h2>

            <ul>
            {todos && todos.length > 0 ? (
                todos.map((todo) => (
                    <li key={todo.id} className='flex table'>
                        <span onClick={() =>  router.push(`/view/${todo.id}`)}>{todo.todo}</span>
                        <div className='button-container'>
                            <button onClick={() => router.push(`/edit/${todo.id}`)} className='btn green hover editbtn' >Edit</button>
                            <button onClick={() => confirmDelete(todo.id)} className='btn red hover'>Delete</button>
                        </div>
                    </li>
                ))
            ) : (
                <p className="no-todos bold flex center">No todos available</p>
            )}
            </ul>

            <div className="flex center"> 
                <button onClick={handleClick} className='btn blue hover'>Add todo</button>
            </div>
            
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