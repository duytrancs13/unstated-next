import React from 'react';
import { StoreContainer } from './store';

const TodoComponent = () => {
    const todo = StoreContainer.useContainer();
    return (
        <div>
            <p>Add todo</p>
            <input type="text" value={todo.title} onChange={todo.handleTodo} />
            <button onClick={todo.handleSubmit}>Add todo</button>
            <div>
                <p>Dear: {todo.name}, here are your current tasks;</p>

                {todo.todos.length > 0 && <ul>
                    {todo.todos.map(todoItem => (
                        <li key={todoItem.id}>{`${todoItem.id}-${todoItem.title}`}</li>
                    ))}
                </ul>
                }
            </div>
        </div>
    )

};

export default TodoComponent;