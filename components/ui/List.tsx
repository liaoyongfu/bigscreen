import React, { ReactNode } from "react";

export interface ListProps<RowEntity> {
    dataSource: RowEntity[];
    rowKey: string;
    renderItem: (row: RowEntity) => ReactNode;
}

const List = <RowEntity, >({ dataSource, renderItem }: ListProps<RowEntity>) => {
    return (
        <div className="grid grid-cols-4 p-4 gap-4">
            {dataSource.map(item => {
                return renderItem(item);
            })}
        </div>
    )
};

export default List;