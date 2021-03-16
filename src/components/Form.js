import React, { useState } from 'react';
import { addTodo } from '../utils/addTodo';

export const Form = () => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = ( e ) => {
        setInputValue( e.target.value );
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        
        if( inputValue.trim().length > 2 ) {
            addTodo(inputValue);
            setInputValue('');
        }

    };

    return (
        <>
        <form id='form' onSubmit={ handleSubmit }>
            <input 
                autoComplete='off'
                className='input' 
                id='input' 
                onChange={ handleInputChange }
                placeholder='Ingresa una tarea' 
                type='text' 
                value={ inputValue }
            />

            <ul className='todos' id='todos'>
            </ul>
        </form>
        </>
    )
};
