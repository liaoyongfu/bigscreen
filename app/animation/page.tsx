import { Metadata } from 'next';
import { Filter } from './QueryForm';
import ClientAnimation from './ClientAnimation';

export const metadata: Metadata = {
    title: 'Animation',
};

export interface RowEntity {
    name: string;
    description: string;
    createTime: string;
    thumbnail: string;
}

const Animation = ({ searchParams }: { searchParams: Filter }) => {
    return <ClientAnimation searchParams={searchParams} />;
};

export default Animation;
