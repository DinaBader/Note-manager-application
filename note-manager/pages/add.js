import { AddTodoAction } from '@/app/actions/TodoActions';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/navigation';

function add() {
    const router = useRouter();

    const [todo,setTodo]=useState('');
    const [description,setDescription]=useState('');
    const dispatch =useDispatch();


    const handleSubmit=(e)=>{
        e.preventDefault();
        dispatch(AddTodoAction(todo,description));
    }

    const GoBack=()=>{
        router.push('/Index');
    }

  return (
    <div>
        <h1>
            Add To do
        </h1>
        <form onSubmit={handleSubmit}>
            <input 
                placeholder='Enter to do'
                onChange={(e)=>setTodo(e.target.value)}
                />
            <input 
                placeholder='Enter description'
                onChange={(e)=>setDescription(e.target.value)}
                />
            <button type="submit"> Add</button>
        </form>
        <button type="submit" onClick={()=>GoBack()}>Go back</button>
    </div>
  )
}

export default add