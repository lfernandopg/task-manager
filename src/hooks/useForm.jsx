import { useState } from 'react';

const useForm = ( initialState ) => {
    
    const [values, setValues] = useState(initialState);

    const reset = () => {
        setValues( initialState );
    }

    const handleInputChange = (e) => {
        let property = e.target.name
        let value = e.target.value
        if (values.hasOwnProperty(property)) {
            setValues({
                ...values,
                [ property ]: value 
            });
        }
    }

    return { values, handleInputChange, setValues, reset };
}

export default useForm