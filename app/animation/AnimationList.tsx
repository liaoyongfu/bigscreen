import Button from '@/components/ui/Button';
import List from '@/components/ui/List';
import React, { Fragment } from 'react';
import { RowEntity } from './page';
import Modal from '@/components/ui/Modal';
import Input from '@/components/ui/Input';

const AnimationList = ({ dataSource }: { dataSource: RowEntity[] }) => {
    return (
        <Fragment>
            <div className="text-gray-600 mt-8 pr-4 pb-2 border-b flex justify-between">
                <div>总共有 {dataSource.length} 条</div>
                <div>
                    <Button>新增</Button>
                </div>
            </div>
            <List
                rowKey="id"
                dataSource={dataSource}
                renderItem={(item) => {
                    return (
                        <div className="border border-gray-300 p-4 rounded-md hover:shadow-2xl hover:bg-blue-200 cursor-pointer">
                            <img src={item.thumbnail} alt="" className="border bg-gray-500" />
                            <div className="mt-2 font-bold">{item.name}</div>
                            <div className="text-gray-400 text-sm">{item.description}</div>
                            <div className="mt-4 text-gray-400 text-sm">{item.createTime}</div>
                        </div>
                    );
                }}
            />
            <Modal title="新增动画">
                <form>
                    <div>
                        名称：
                        <Input />
                    </div>
                </form>
            </Modal>
        </Fragment>
    );
};

export default AnimationList;
