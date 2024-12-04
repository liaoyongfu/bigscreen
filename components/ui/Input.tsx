import React, { InputHTMLAttributes } from 'react';

const Input = ({ ...rest }: InputHTMLAttributes<HTMLInputElement>) => {
    return (
        <input
            {...rest}
            className="p-2 border-solid border border-black border-opacity-25 h-8 rounded-md focus:ring-1 focus:border-sky-500 focus:outline-none"
        />
    );
};

export default Input;
