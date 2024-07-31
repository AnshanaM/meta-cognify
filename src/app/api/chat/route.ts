// import OpenAI from 'openai';
// import { OpenAIStream, StreamingTextResponse } from 'ai';

// const openai = new OpenAI({
//     apiKey: "api71-api-33f78968-1a35-48b8-b659-30b8321942c7",
//     baseURL: "https://api.ai71.ai/v1/",
// });

// export const runtime = 'edge';

// export async function POST(req: Request, res: Response){
//     const { messages } = await req.json();
//     console.log('messages:', messages);

//     const response = await openai.chat.completions.create({
//         model: "tiiuae/falcon-180B-chat",
//         messages: [
//             {role: "system",
//                 content: "You are a chatbot named Noobert."+
//                 "Your job is to help students test their understanding of a given concept by implementing the Feynman Technique."+
//                 "The Feynman technique is the student explains the concept they just learnt to a complete beginner."+
//                 "Your role is to act as a complete beginner in any topic and your address people as students."+
//                 "Ask questions that a beginner would ask about the given topic."+
//                 "As the student provides an explanation, determine whether the student's explanation is correct or not."+
//                 "Ask questions based on their explanation to help them understand the topic more"+
//                 "Analyze the student's explanation in terms of clarity, accuracy, and completeness."+
//                 "When the user's input is 'noobert_stop', provide your analysis using the following template:"+
//                 "Template: Clarity: X/10 Accuracy: X/10 Completeness: X/10 and"+
//                 "Areas of Improvement: Rate the student's clarity, accuracy, and completeness out of 10."+
//                 "Replace 'X' with a number from 0 to 10 based on the student's performance."+
//                 "The 'Areas of Improvement' section should be filled based on the knowledge gaps you identified during the explanation."+
//                 "Your replies should be under 500 characters."
//             },
//             ...messages,
//         ],
//         stream: true,
//         temperature: 1,
//     });

//     return response;
// }

import { NextResponse } from 'next/server';

const AI71_BASE_URL = "https://api.ai71.ai/v1/";
const API_KEY = "api71-api-33f78968-1a35-48b8-b659-30b8321942c7";

export const runtime = 'edge';

export async function POST(req: Request) {
    try {
        const { messages } = await req.json();

        // Simple invocation
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

        // Streaming invocation
        const streamResponse = await fetch(`${AI71_BASE_URL}chat/completions?stream=true`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${API_KEY}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                model: "tiiuae/falcon-180B-chat",
                messages: [{ role: "user", content: "write a poem." }],
            }),
        });

        const reader = streamResponse.body?.getReader();
        if (!reader) throw new Error("No reader found");

        const stream = new ReadableStream({
            async start(controller) {
                try {
                    while (true) {
                        const { done, value } = await reader.read();
                        if (done) break;
                        const chunk = new TextDecoder().decode(value);
                        // Process the chunk
                        const deltaContent = JSON.parse(chunk).choices[0]?.delta?.content;
                        if (deltaContent) {
                            controller.enqueue(deltaContent);
                        }
                    }
                } catch (error) {
                    console.error('Stream reading error:', error);
                } finally {
                    controller.close();
                }
            }
        });

        return new NextResponse(stream, {
            headers: {
                'Content-Type': 'text/event-stream',
                'Cache-Control': 'no-cache',
                'Connection': 'keep-alive',
            }
        });
    } catch (error) {
        console.error('Error handling request:', error);
        return NextResponse.json({ error: 'Failed to handle request' }, { status: 500 });
    }
}

