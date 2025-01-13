import { AIDesignIdea } from "@/configs/AiModel";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    
    const { prompt } = await req.json();

    try {
        const result = await AIDesignIdea.sendMessage(prompt);
        return NextResponse.json(JSON.parse(await result.response.text()));
    } catch (e) {
        return NextResponse.json({ error: e });
    }
}
