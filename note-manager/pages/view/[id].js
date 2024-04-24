import React from 'react';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import "../../src/app/globals.css"
import "./view.css"; 

const ViewPage = () => {
    const router = useRouter();
    const { id } = router.query;

    const todo = useSelector((state) => state.Todo.todos.find((item) => item.id === id));

    const GoBack=()=>{
        router.push('/Index');
    }

    return (
        <div className="container">
            <h1 className='title'>To Do</h1>
            {todo && 
                <>
                    <div className='info'>
                        <p>To do: {todo.todo}</p>
                        <p>Description: {todo.description}</p> 
                    </div>
                </>
            }
            <div className='button-container'>
                <button onClick={()=>GoBack()} className='btn green hover'>Go back</button>    
            </div>
        </div>
    );
};

export default ViewPage;
