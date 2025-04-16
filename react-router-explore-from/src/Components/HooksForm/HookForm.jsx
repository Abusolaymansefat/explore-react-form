import React from 'react';
import UseInputFeld from '../../hooks/UseInputFeld';

const HookForm = () => {


    const [name, nameOnChange] = UseInputFeld('')
    const [email, emailOnChange] = UseInputFeld('')
    const [password, passwordOnChange] = UseInputFeld('')

    const handleSubmit = e => {
        e.preventDefault()
        console.log('submit', name, email, password)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input defaultValue={name} type="text" onChange={nameOnChange}/>
                <br />
                <input type="email" onChange={emailOnChange} name=""  />
                <br />
                <input type="password" name="" onChange={passwordOnChange}  />
                <br />
                <input type="submit" value="submit" />
            </form>
        </div>
    );
};

export default HookForm;