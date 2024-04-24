import React from 'react';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';

const ViewPage = () => {
    const router = useRouter();
    const { id } = router.query;

    const todo = useSelector((state) => state.Todo.todos.find((item) => item.id === id));

    const GoBack=()=>{
        router.push('/Index');
    }

        return (
        <div>
            <h1>View Page</h1>
            {todo && 
                <>
                    <p>To do: {todo.todo}</p>
                    <p>Description: {todo.description}</p> 
                </>
            }
        <button onClick={()=>GoBack()}>Go back</button>    
        </div>
    );
};

export default ViewPage;
