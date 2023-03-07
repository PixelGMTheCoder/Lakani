import React from "react";

function Input({
    type,
    name,
    title,
    placeholder,
    defaultValue,
    onChange,
    value,
}) {
    return ( <
        >
        <
        label className = "mt-3"
        htmlFor = {
            name
        } > {
            title
        } <
        /label> <
        input onChange = {
            onChange
        }
        value = {
            value
        }
        defaultValue = {
            defaultValue
        }
        placeholder = {
            placeholder
        }
        className = "border rounded-lg py-3 px-3"
        type = {
            type ? type : "text"
        }
        name = {
            name
        }
        id = "" /
        >
        <
        />
    );
}

export default Input;