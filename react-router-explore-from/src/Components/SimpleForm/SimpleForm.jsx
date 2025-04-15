import React from 'react';

const SimpleForm = () => {
    const handleSubmt = (e) => {

        e.preventDefault();
        console.log(e.target.name.value)
    }
    return (
        <div>
            <form onSubmit={handleSubmt}>
                <input type="text" name='name' placeholder="Your Name" />
                <br />
                <input type="email" name="email" id="" placeholder='Your Email' />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default SimpleForm;