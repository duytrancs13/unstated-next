import React from 'react';
import { StoreContainer } from './store';
import SecondChildComponent from './second-child';

const FirstChildComponent = () => {
    const form = StoreContainer.useContainer();
    return (
        <div>
            <p>Hello123: {form.name}</p>
            <SecondChildComponent />
        </div>
    )
};
export default FirstChildComponent;