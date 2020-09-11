import React, {useState } from 'react';

//component function
function ToDo ()
{

    const [newTask, setNewTask] = useState('default');

    const [toDos, setToDos] = useState([
        {task:"Buy milk"},
        {task: "Learn React"},
        {task: "Find out what Redux is"}

    ]);

    const addNewTask = event => {
        event.preventDefault();
    }
    /*function addNewTask (event)
    {

    } */


    //We use "return" for our render, in a component.
    return (
        <>
            <h2>{newTask}</h2>

            <form onSubmit={addNewTask}>
                <label htmlFor="task">New Task:</label>
                <input 
                type="text"
                 id="task" 
                 onChange={e => {setNewTask(e.target.value)}}
                 value = {newTask} />
                 <p>
                     <strong>Current Task Value:</strong>
                     <em>{newTask}</em>
                 </p>
                <input type="submit" value="Add To-Do" />
            </form>
    <ul>{toDos.map((toDo, index) => <li key={index}>{toDo.task}</li>)}</ul>
        </>
    );

}

export default ToDo;