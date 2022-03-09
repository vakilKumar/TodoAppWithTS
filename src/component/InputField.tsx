import React from 'react'
import './style/InputField.css'

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>,
  handleAdd : ()=> void;
}
const InputField  = ({todo,setTodo,handleAdd}: Props)=>{

  
    return (
      <div className='main-cont'>
           
           <input className='input-cont' value={todo} type="text" placeholder='Enter a Task' onChange={(e)=>setTodo(e.target.value)}></input>
           <button className='submit-cont' type='submit' onClick={handleAdd}>Go</button>
      </div>
    )
}



export default InputField;
