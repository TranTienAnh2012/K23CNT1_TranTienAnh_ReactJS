import React, { useEffect, useReducer } from 'react'
import { TtatodoReducer } from '../reducers/TtaTodoReducers'
import TtaAppToDo from './TtaAppToDo';
import TtaTodoitem from './TtaToDoItem';

function TtaToDoList() {
    const [todos, dispatch] = useReducer(TtatodoReducer, [], () =>{
        const storedTodos = localStorage.getItem("todos");
        return storedTodos ? JSON.parse(storedTodos): [];
    });
    useEffect(()=>{
        localStorage.setItem('todos',JSON.stringify(todos));
    }, [todos])
  return (
    <div>
        <h2 class='DSheader' >Danh Sách Công Việc </h2>
        <TtaAppToDo dispatch={dispatch}/>
        <ul>
            {todos.map(todo =>(
                <TtaTodoitem key={todo.id} todo={todo} dispatch={dispatch} />
            ))}
        </ul>
    </div>
  )
}

export default TtaToDoList