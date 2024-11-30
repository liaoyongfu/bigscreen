import classNames from "classnames";
import React, { HTMLAttributes, ReactNode } from "react";

export type ButtonType = 'default' | 'primary';

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement>{
    children?: ReactNode;
    type?: ButtonType;
    htmlType?: "submit" | "reset" | "button";
}

const Button = ({children, htmlType, type = 'default', ...rest}: ButtonProps) => {
    return (
        <button {...rest} type={htmlType} className={classNames('px-8 py-1 flex items-center rounded-md', {
            'border-gray-500': type === 'default',
            'border-solid': type === 'default',
            'border': type === 'default',
            'bg-blue-500': type === 'primary',
            'text-white': type === 'primary'
        })}>{children}</button>
    )
};

export default Button;