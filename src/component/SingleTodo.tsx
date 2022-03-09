import React, { useState } from 'react';
import { Todo } from './Model';
import {AiFillEdit,AiFillDelete} from 'react-icons/ai'
import {MdDone} from 'react-icons/md';
import './style/SingleTodo.css'

type Props = {
    todo : Todo,
    todos : Todo[],
    setTodos : React.Dispatch<React.SetStateAction<Todo[]>>

}

export const SingleTodo = ({todo, todos, setTodos} : Props) => {
    const  handleDone = (id:number)=>{
             
        setTodos(todos.map((todo)=>todo.id === id?{...todo,isDone:!todo.isDone}:todo))
    }
   
    const hanldeDelete = (id:number)=>{
       setTodos(todos.filter((todo)=> todo.id !== id));
    }



  return (
    <div>
        <br/>
        <form className='todo_single_cont'>
            {
              todo.isDone?  (
                    <s className='todo_single_text'>{todo.todo}</s>

                ):(

                    <span className='todo_single_text'>{todo.todo}</span>
                )
            }
            <div>
                <span className="icon">
                    <AiFillEdit/>
                    </span>
                <span className="icon" onClick={()=>hanldeDelete(todo.id)}>
                    <AiFillDelete/>
                    </span>
                <span className="icon" onClick={()=> handleDone(todo.id)}>
                    <MdDone/>
                    </span>
            </div>
             
        </form>
    </div>
  )
}
