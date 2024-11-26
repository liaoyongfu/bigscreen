import classNames from "classnames";
import React, { ReactNode } from "react";

export type ButtonType = 'default' | 'primary';

export interface ButtonProps {
    children?: ReactNode;
    type?: ButtonType;
}

const Button = ({children, type = 'default'}: ButtonProps) => {
    return (
        <button className={classNames('px-8 py-1 flex items-center rounded-md', {
            'border-gray-500': type === 'default',
            'border-solid': type === 'default',
            'border': type === 'default',
            'bg-blue-500': type === 'primary',
            'text-white': type === 'primary'
        })}>{children}</button>
    )
};

export default Button;