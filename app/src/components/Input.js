import React, { useEffect, useRef } from 'react';
import { useField } from '@unform/core';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        marginBottom: '15px',
        padding: '12px 16px',
        borderRadius: '4px',
        border: '2px solid #ddd',
        fontSize: '15px',
        color: '#444',
        transition: 'border-color 0.2s'
    }
}));

export default function Input({ name, label, ...rest }) 
{
    const inputRef = useRef(null);
    const { fieldName, defaultValue = '', registerField, error } = useField(name);
    const classes = useStyles();

    useEffect(() => {
        registerField({
            name: fieldName,
            ref: inputRef.current,
            path: 'value',
        });
    }, [fieldName, registerField]);

    return (
        <>
            {label && <label htmlFor={fieldName}>{label}</label>}

            <input 
                className={classes.root} 
                id={fieldName} 
                ref={inputRef} 
                defaultValue={defaultValue} {...rest} 
            />

            {error && <span style={{ color: '#f00' }}>{error}</span>}
        </>
    );
}
