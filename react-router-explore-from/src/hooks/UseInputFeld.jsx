import { useState } from "react";

const UseInputFeld = (defaultValue) => {
    const [fieldValue, setFieldValue] = useState(defaultValue)

    const handleFieldValue = e =>{
        setFieldValue(e.target.value)
    }

    return [fieldValue, handleFieldValue]
};

export default UseInputFeld;