import React from 'react';
import { StoreContainer } from './store';
import FirstChildComponent from './first-child';

const FormComponent = () => {
    const form = StoreContainer.useContainer();
    return (
        <div>
            <p>Hello: {form.name}</p>
            <input type="text" value={form.input} onChange={form.handleInput} />
            <button onClick={form.updateName}>Change name</button>
            <FirstChildComponent />
        </div>
    )
};

export default FormComponent;