'use client';

import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import { useState } from 'react';

export interface Filter {
    name: string;
    description: string;
}

const QueryForm = ({ handleSubmit, defaultFilter }: { handleSubmit: (params: Filter) => Promise<void>; defaultFilter: Filter }) => {
    const [name, setName] = useState(defaultFilter.name);
    const [description, setDescription] = useState(defaultFilter.description);

    const handleReset = () => {
        setName('');
        setDescription('');
        handleSubmit({ name: '', description: '' });
    };

    return (
        <form
            id="form"
            className="grid grid-cols-4"
            onSubmit={(e) => {
                e.preventDefault();
                handleSubmit({ name, description });
            }}
        >
            <div className="flex items-center">
                <div className="">名称：</div>
                <div className="fex-1">
                    <Input
                        className="w-full"
                        name="name"
                        value={name}
                        onChange={(e) => {
                            setName(e.target.value);
                        }}
                        placeholder="支持关键字搜索"
                    />
                </div>
            </div>
            <div className="flex items-center">
                <div className="">描述：</div>
                <div className="fex-1">
                    <Input
                        name="description"
                        value={description}
                        onChange={(e) => {
                            setDescription(e.target.value);
                        }}
                        className="w-full"
                        placeholder="支持关键字搜索"
                    />
                </div>
            </div>
            <div className="flex items-center gap-4">
                <Button htmlType="submit" type="primary">
                    查询
                </Button>
                <Button htmlType="reset" onClick={handleReset}>
                    重置
                </Button>
            </div>
        </form>
    );
};

export default QueryForm;
