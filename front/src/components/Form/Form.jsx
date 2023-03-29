import React, { useState } from 'react';
import validation from './validations.js';

const Form = ({login}) => {
    const [userData, setUserData] = useState({
        username:"", 
        password:"",
    });

    const [errors, setErrors] = useState({
        username:"",
        password:"",
    });

    const handleInputChange = (event) => {
        const property = event.target.name;
        const value = event.target.value;
        
        setUserData({ ...userData, [property]: value }); //[] porque es la key del obj userData
        // validation({ ...userData, [property]: value }, setErrors, errors);
        setErrors(validation({ ...userData, [property]: value })); 
    };

    const submitHandler =(event)=> {
        event.preventDefault();
        login(userData);
    };

    return(
        <form onSubmit={submitHandler}>
            <div>
                <label htmlFor="">Username</label>
                <input 
                type="text" 
                name="username" 
                value = {userData.username} 
                onChange={handleInputChange} />
                <p>{errors.name}</p>
            </div>
            
            <div>
                <label htmlFor="">Password</label>
                <input 
                type="text" 
                name="password" 
                value = {userData.password}
                onChange={handleInputChange} />
                <p>{errors.password}</p>
            </div>
            <button type="submit" >Login</button>
        </form>
    )
}

export default Form;
