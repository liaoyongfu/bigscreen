
import { Metadata } from "next";
import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";
import List from "../../components/ui/List";

export const metadata: Metadata = {
    title: 'Animation'
}

export interface RowEntity {
    name: string;
    description: string;
    createTime: string;
    thumbnail: string;
}

const Animation = async ({
    searchParams,
  }: {
    searchParams: { [key: string]: string | string[] | undefined }
  }) => {
    const data = await fetch(process.env.NEXT_PUBLIC_BASE_URL + '/api/animation?name=' + searchParams.name, {method: 'GET'});
    const animations: RowEntity[] = await data.json();

    return (
        <div>
            <form id="form" className="grid grid-cols-4" action="/animation">
                <div className="flex items-center">
                    <div className="">名称：</div>
                    <div className="fex-1"><Input className="w-full" name="name" placeholder="支持关键字搜索" /></div>
                </div>
                <div className="flex items-center">
                    <div className="">描述：</div>
                    <div className="fex-1"><Input name="description" className="w-full" placeholder="支持关键字搜索" /></div>
                </div>
                <div className="flex items-center gap-4">
                    <Button htmlType="submit" type="primary">查询</Button>
                    <Button htmlType="reset">重置</Button>
                </div>
            </form>
            <div className="text-gray-600 mt-8 pr-4 pb-2 border-b flex justify-between">
                <div>总共有 23 条</div>
                <div>
                    <Button>新增</Button>
                </div>
            </div>
            <List rowKey="id" dataSource={animations} renderItem={item => {
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