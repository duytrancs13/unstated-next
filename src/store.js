import { useState } from 'react';
import shortid from 'shortid';
import { createContainer } from "unstated-next";

export const useStore = () => {
    const todoList = [
        {id: 1, title: 'Write code'},
        {id: 2, title: 'Buy milk'},
    ]
    const [input, setInput] = useState('');
    const [name, setName] = useState('Tran Khanh Duy');

    const [todos, setTodos] = useState(todoList);
    const [title, setTitle] = useState('');

    const handleInput = e => {
        setInput(e.target.value)
    };

    const updateName = e => {
        e.preventDefault();
        setName(input);
        setInput('');
    };

    const handleTodo = e => {
        setTitle(e.target.value)
    };

    const handleSubmit = e => {
        e.preventDefault();
        const todo = {
            id: shortid.generate(),
            title: title
        };
        setTodos(todos.concat(todo));
        setTitle('');
    };

    return {
        input,
        handleInput,

        name,
        updateName,

        todos,
        handleTodo,

        title,
        handleSubmit,
    };


}

export const StoreContainer = createContainer(useStore);