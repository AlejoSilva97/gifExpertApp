import React, { useState } from 'react'
import PropTypes from 'prop-types';

//Al venir props.setCategories desestructuramos y sacamos directamente {setCategories}
export const AddCategory = ({setCategories}) => {

    const [inputValue, setinputValue] = useState('');

    //En e.target.value se guarda el valor actual que tiene el input
    const handleInputChange =(e) =>{
        setinputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        //con este metodo prevenimos que se recargue el navegador al hacer submit
        e.preventDefault();

        if ( inputValue.trim().length > 2 ) {
            //Este metodo setCategories se envia como propiedad desde el elemento padre
            setCategories( cats => [inputValue, ...cats]);
            setinputValue('');
        }
    }

    return (
        <form onSubmit={handleSubmit} >
            <p> {inputValue} </p>
            <input 
                type="text"
                value={inputValue}
                onChange={handleInputChange}
            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}
