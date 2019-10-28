import React from 'react';
import { StoreContainer } from './store';

const SecondChildComponent = () => {
    const form = StoreContainer.useContainer();
    return (
        <div>
            <p>Hello123: {form.name}</p>
        </div>
    )
};
export default SecondChildComponent;