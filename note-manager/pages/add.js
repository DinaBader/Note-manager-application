import { AddTodoAction } from '@/app/actions/TodoActions';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';

function add() {
    const [todo,setTodo]=useState('');
    const dispatch =useDispatch();


    const handleSubmit=(e)=>{
        e.preventDefault();
        dispatch(AddTodoAction(todo));
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
            <button type="submit"> Add</button>
        </form>
    </div>
  )
}

export default add