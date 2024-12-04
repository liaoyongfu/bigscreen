'use client';

import React, { useCallback, useEffect, useState } from 'react';
import { RowEntity } from './page';
import QueryForm, { Filter } from './QueryForm';
import AnimationList from './AnimationList';

const ClientAnimation = ({ searchParams }: { searchParams: Filter }) => {
    const [dataSource, setDataSource] = useState<RowEntity[]>([]);
    const handleSubmit = useCallback(async ({ name, description }: Filter) => {
        const data = await fetch(process.env.NEXT_PUBLIC_BASE_URL + '/api/animation?name=' + name + '&description=' + description, {
            method: 'GET',
        });
        const animations: RowEntity[] = await data.json();
        setDataSource(animations);
    }, []);

    useEffect(() => {
        handleSubmit({ name: '', description: '' });
    }, [handleSubmit]);

    return (
        <div>
            <QueryForm handleSubmit={handleSubmit} defaultFilter={searchParams} />
            <AnimationList dataSource={dataSource} />
        </div>
    );
};

export default ClientAnimation;
