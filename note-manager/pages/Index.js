"use client";
import React from 'react';
import { useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';

function Index() {
    const router = useRouter();
    const Todo = useSelector((state) => state.Todo);
    const { todos } = Todo;

    const handleClick = () => {
        router.push('/add');
    };

    const view=()=>{
        router.push('/view');
    }

    return (
        <div>
            <button onClick={handleClick}>Add todo</button>
            <ul>
                {todos && todos.map((todo) => (
                    <li key={todo.id}>
                        <span onClick={()=>view()}>{todo.todo}</span>
                        <button>Edit</button>
                        <button>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Index;
