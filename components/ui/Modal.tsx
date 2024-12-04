import React, { ReactNode } from 'react';
import Button from './Button';

const Modal = ({ children, title }: { children: ReactNode; title: string }) => {
    return (
        <div className="fixed left-0 right-0 top-0 bottom-0 flex justify-center items-center hidden">
            <div className="absolute left-0 right-0 top-0 bottom-0 bg-black opacity-65"></div>
            <div className="relative bg-white rounded-md min-w-[600px]">
                <div className="flex justify-between px-4 py-2 border-b">
                    <h4 className="text-lg">{title}</h4>
                    <div className="text-gray-400 cursor-pointer hover:text-gray-500">X</div>
                </div>
                <div className="p-4">{children}</div>
                <div className="border-t px-4 py-4 flex justify-end gap-2">
                    <Button>取消</Button>
                    <Button type="primary">保存</Button>
                </div>
            </div>
        </div>
    );
};

export default Modal;
