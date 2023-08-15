import React, { useState } from 'react';

interface ToDos  {
  value: string,
  id: number,
  complete: boolean
}

const ToDoApp = () => {
    //state for todos array
    const [todos, setTodos] = useState <ToDos[]>([]);
    //state for input value
    const [input, setInput] = useState<string>('');


  // Function for setting comlete or not
    const handleToggle = (id: number) => {
      setTodos(
        todos.map((todo) => {
          if(todo.id === id) {
            return {...todo, complete: !todo.complete};
          }
          return todo;
        })
      )
    }
    
    // function for adding new to-do
    const handleAdd = () => {
      const valueInput = document.querySelector('#valueInput') as HTMLInputElement;
      const newTodo: ToDos = {id: Date.now(), value: input, complete: false}
      setTodos([...todos, newTodo]);
      valueInput.value = ''
    }


  return (
    <div className=' flex flex-col justify-center items-center'>
      <div className='w-full h-full flex flex-col justify-center items-center my-8'>
        <h1 className='text-3xl my-4'>This is to-do app</h1>
        <p className='text-sm'>This is react and typescript to-do list app.</p>
      </div>
      <div className='flex flex-col justify-center items-center my-8'>
        <h3 className='text-xl capitalize my-4'>you have to do</h3>
        <ul className='flex flex-col capitalize my-4'>
          {todos.length === 0 
          ? 
          <li className='my-2'>complete the challenge</li> 
          : 
          todos.map((todo) => <li key={todo.id} onClick={()=> handleToggle(todo.id)} style={{textDecoration: todo.complete ? 'line-through' : 'none'}} className='my-1 cursor-pointer'>{todo.value}</li>)
          }
          
        </ul>
      </div>
      <div className='flex flex-col justify-center items-center my-8'>
          <input 
                id='valueInput'
                type="text"
                placeholder='Add To-Do'
                className='border border-black py-1 px-4 my-4 rounded-2xl hover:text-white hover:bg-black duration-500 outline-none'
                onChange={(e)=> {setInput(e.currentTarget.value)}}
                />
          <button className='border border-black py-1 px-4 my-4 rounded-2xl hover:text-white hover:bg-black duration-500 outline-none' onClick={handleAdd}>Add</button>
      </div>
    </div>
  )
}

export default ToDoApp;