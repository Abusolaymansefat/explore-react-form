import React, { useState } from 'react';

const ControlledField = () => {


    const [password, setPassword] = useState()

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('submitted')
    }

    const handlePasswordOnChange = e =>{
        console.log(e.target.value)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="email" name="email" id="" placeholder='Email' required />
                <br />
                <input type="password" name="password" onChange={handlePasswordOnChange} defaultValue={password} id="" placeholder='password' required />
                <br />
                <input type="submit" value="submit" />
            </form>
        </div>
    );
};

export default ControlledField;