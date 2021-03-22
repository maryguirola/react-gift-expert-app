
import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ( { setCategories } ) => {

    const [inputValue, setinputValue] = useState('');

    const handleInputChange = (e) => {
        setinputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if ( inputValue.trim().length > 2 ) {
            setCategories( element => [inputValue, ...element]);
            setinputValue('');
        }
        
    }

    return (
        
        <form onSubmit= { (e) => handleSubmit(e) }>
            <input
                type="text"
                value= { inputValue }
                onChange = { (e) => handleInputChange(e) }
            />
        </form>
        
    )
}


AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}
