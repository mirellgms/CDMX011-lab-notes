import React from 'react'

export default function TodoItem({todo, toggleTodo}) {
    const {id, task, completed}= todo;
    const handleTodoClick = () => {
        toggleTodo(id);
    };
    return (
    <li className="list">
        <input type='checkbox' checked={completed} onChange={handleTodoClick}/>
        {task} 
    </li>
    );
    
    
}
