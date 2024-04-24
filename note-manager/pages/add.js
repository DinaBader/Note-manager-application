import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { AddTodoAction } from '@/app/actions/TodoActions';
import { Message } from 'primereact/message';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import "./add.css"
import "../src/app/globals.css"

function AddTodo() {
    const router = useRouter();
    const [todo, setTodo] = useState('');
    const [description, setDescription] = useState('');
    const [showMessage, setShowMessage] = useState(false);
    const [showEmptyfieldMessage,setshowEmptyfieldMessage]=useState(false);
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        if(todo=="" || description==""){
            setshowEmptyfieldMessage(true);
            return ;
        }
        e.preventDefault();
        dispatch(AddTodoAction(todo, description));

        setTodo('');
        setDescription('');
        setShowMessage(true);
    };

    useEffect(() => {
        let timeout;
        if (showMessage) {
            timeout = setTimeout(() => {
                setShowMessage(false);
            }, 3000);
        }
        if(showEmptyfieldMessage){
            timeout = setTimeout(() => {
                showEmptyfieldMessage(false);
            }, 3000);
        }
        return () => clearTimeout(timeout);
    }, [showMessage,showEmptyfieldMessage]);

    const handleGoBack = () => {
        router.push('/Index');
    };

    return (
        <div>
            <h2 className='flex center'>Add To Do</h2>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text"
                    placeholder="Enter todo"
                    value={todo}
                    onChange={(e) => setTodo(e.target.value)}
                    className='addTodo'
                />
                <textarea 
                    type="text"
                    placeholder="Enter description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className='addTodescription'
                />
                <div className="flex center"> 
                    <button type="submit" className='btn blue'>Add</button>
                </div>
            </form>
            <div className="flex center"> 
                <button onClick={handleGoBack} className='btn green top'>Go back</button>
            </div>
            {showMessage && (
                <Message severity="success" text="Task added successfully" style={{ marginTop: '1rem',marginLeft:'550px' }} />
            )}
            {showEmptyfieldMessage && (
                <Message severity="error" text="Field cannot be empty" style={{ marginTop: '1rem',marginLeft:'550px' }} />
            )}
        </div>
    );
}

export default AddTodo;
