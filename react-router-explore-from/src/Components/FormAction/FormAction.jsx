import React from 'react';

const FormAction = () => {
    const handleFormAction = (FormData) => {
        console.log(FormData.get('name'))
    }
    return (
        <div>
            <form action={handleFormAction}>
                <input type="text" name='name' placeholder='Name' />
                <br />
                <input type="email" name="email" id="" placeholder='Your Email'/>
                <br />
                <input type="submit" value="submit" />
            </form>
        </div>
    );
};

export default FormAction;