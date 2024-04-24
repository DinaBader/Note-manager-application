"use client";
import React from 'react';
import { useRouter } from 'next/navigation';
import { useSelector,useDispatch } from 'react-redux';
import { DeleteTodoAction } from '@/app/actions/TodoActions';

function Index() {
    const router = useRouter();
    const Todo = useSelector((state) => state.Todo);
    const { todos } = Todo;
    const dispatch =useDispatch();

    const handleClick = () => {
        router.push('/add');
    };

    const view=(id)=>{
        router.push(`/view/${id}`);
    }

    const deleteTodo=(id)=>{
        dispatch(DeleteTodoAction(id));
    }

    return (
        <div>
            <button onClick={handleClick}>Add todo</button>
            <ul>
                {todos && todos.map((todo) => (
                    <li key={todo.id}>
                        <span onClick={()=>view(todo.id)}>{todo.todo}</span>
                        <button>Edit</button>
                        <button onClick={()=>deleteTodo(todo.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Index;
