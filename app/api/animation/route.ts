import dbConnect from "@/lib/mongodb"
import AnimationModel from "@/models/Animation";
import { NextRequest, NextResponse } from "next/server"

export const GET = async (req: NextRequest, res: NextResponse) => {
    try {
        await dbConnect();
        
        const { searchParams } = new URL(req.url);
        const queryParam = Object.fromEntries(searchParams.entries().filter(([_, value]) => value !== '' && value !== undefined).map(([_, value]) => {
            return [_, {
                $regex: value,
                $options: 'i'
            }]
        }));

        console.info('queryParam:', queryParam);

        const animations = await AnimationModel.find(queryParam);

        return Response.json(animations);
    } catch(error) {
        console.error('error:', error);
        return Response.json([], {
            status: 500,
            headers: {
                'Content-Type': 'application/json;chatset:utf-8'
            },
        })
    }
}