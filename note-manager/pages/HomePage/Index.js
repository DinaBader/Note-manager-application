"use client";
import React from 'react';
import { useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';

function Index() {
    const router = useRouter();
    const Todo = useSelector((state)=>state.Todo);
    const {todos}=Todo;

    const handleClick = () => {
        router.push('/add');
    };

    return (
        <form>
            <button onClick={handleClick}>Add to do</button>
            {/* list all to dos */}
            <ul>
                {todos && todos.map((t)=>(
                    <li key={t.id}>
                        <span>{t.todo}</span>
                        <button> view</button>
                        <button> edit</button>
                        <button> delete</button>
                    </li>
                ))}
               
            </ul>
        </form>
    );
}

export default Index;
