import { NextResponse } from 'next/server';

const AI71_BASE_URL = "https://api.ai71.ai/v1/";
const API_KEY = "api71-api-33f78968-1a35-48b8-b659-30b8321942c7";

export const runtime = 'edge';

export async function POST(req: Request) {
    try {
        const { messages } = await req.json();

        // Send the entire message history
        const simpleResponse = await fetch(`${AI71_BASE_URL}chat/completions`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${API_KEY}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                model: "tiiuae/falcon-180B-chat",
                messages: [
                    { role: "system", content: "Introduce yourself as Noobert. Be a helpful assistant for students." },
                    ...messages,
                ],
            }),
        });

        const simpleResult = await simpleResponse.json();
        console.log("Simple invocation response:", simpleResult);

        // Extract the assistant's message content
        const assistantMessageContent = simpleResult.choices[0]?.message?.content;

        // Return the response with the assistant's message
        return NextResponse.json({ assistantMessageContent });

    } catch (error) {
        console.error('Error handling request:', error);
        return NextResponse.json({ error: 'Failed to handle request' }, { status: 500 });
    }
}
