import React, { useState } from 'react';

import './App.css';
import InputField from './component/InputField';
import Logo from './component/Logo';
import { Todo } from './component/Model';
import TodoList from './component/TodoList';




function App() {

  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([])
  // console.log(todo);

  const handleAdd = ()=>{
    if(todo){
      setTodos([...todos, {id:Date.now(), todo, isDone:false}])
      setTodo("")
    }
  }

  // console.log(todos);
  
  

  return (
    <div className="App">
      <Logo />
      <br/>
      <InputField todo={todo}  setTodo={setTodo} handleAdd ={handleAdd}/>
      <TodoList todos={todos} setTodos={setTodos}/>
    </div>
  );
}

export default App;
