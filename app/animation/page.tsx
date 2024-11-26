import { Metadata } from "next";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";
import List from "../components/ui/List";

export const metadata: Metadata = {
    title: 'Animation'
}

export interface RowEntity {
    name: string;
    description: string;
    createTime: string;
    thumbnail: string;
}

const list: RowEntity[] = [
    {
        name: '光速',
        description: '光速动画',
        createTime: '2024-11-25 17:45:13',
        thumbnail: 'https://www.baidu.com/img/PCfb_5bf082d29588c07f842ccde3f97243ea.png'
    },
    {
        name: '光速',
        description: '光速动画',
        createTime: '2024-11-25 17:45:13',
        thumbnail: 'https://www.baidu.com/img/PCfb_5bf082d29588c07f842ccde3f97243ea.png'
    },
    {
        name: '光速',
        description: '光速动画',
        createTime: '2024-11-25 17:45:13',
        thumbnail: 'https://www.baidu.com/img/PCfb_5bf082d29588c07f842ccde3f97243ea.png'
    },
    {
        name: '光速',
        description: '光速动画',
        createTime: '2024-11-25 17:45:13',
        thumbnail: 'https://www.baidu.com/img/PCfb_5bf082d29588c07f842ccde3f97243ea.png'
    },
    {
        name: '光速',
        description: '光速动画',
        createTime: '2024-11-25 17:45:13',
        thumbnail: 'https://www.baidu.com/img/PCfb_5bf082d29588c07f842ccde3f97243ea.png'
    },
    {
        name: '光速',
        description: '光速动画',
        createTime: '2024-11-25 17:45:13',
        thumbnail: 'https://www.baidu.com/img/PCfb_5bf082d29588c07f842ccde3f97243ea.png'
    }
];

const Animation = () => {
    return (
        <div>
            <form className="grid grid-cols-4">
                <div className="flex items-center">
                    <div className="">名称：</div>
                    <div className="fex-1"><Input className="w-full" placeholder="支持关键字搜索" /></div>
                </div>
                <div className="flex items-center">
                    <div className="">名称：</div>
                    <div className="fex-1"><Input className="w-full" placeholder="支持关键字搜索" /></div>
                </div>
                <div className="flex items-center">
                    <div className="">名称：</div>
                    <div className="fex-1"><Input className="w-full" placeholder="支持关键字搜索" /></div>
                </div>
                <div className="flex items-center gap-4">
                    <Button type="primary">查询</Button>
                    <Button>重置</Button>
                </div>
            </form>
            <div className="text-gray-600 mt-8 pr-4 pb-2 border-b">
                总共有 23 条
            </div>
            <List rowKey="id" dataSource={list} renderItem={item => {
                return (
                    <div className="border border-gray-300 p-4 rounded-md hover:shadow-2xl hover:bg-blue-200 cursor-pointer">
                        <img src={item.thumbnail} alt="" className="border bg-gray-500" />
                        <div className="mt-2 font-bold">{item.name}</div>
                        <div className="text-gray-400 text-sm">{item.description}</div>
                        <div className="mt-4 text-gray-400 text-sm">{item.createTime}</div>
                    </div>
                )
            }} />
        </div>
    )
};

export default Animation;