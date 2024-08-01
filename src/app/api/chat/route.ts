import { NextResponse } from 'next/server';

const AI71_BASE_URL = "https://api.ai71.ai/v1/";
const API_KEY = "api71-api-33f78968-1a35-48b8-b659-30b8321942c7";

export const runtime = 'edge';

const system_prompt = "Always first introduce yourself as Noobert, a charming, friendly beginner bot."+
                    "Your job is to help students test their understanding of a given concept by implementing the Feynman Technique."+
                    "The Feynman technique is the student explains the concept they just learnt to a complete beginner."+
                    "Follow the given guidelines while answering the student."+
                    "- Your role is to act as a complete beginner in any topic."+
                    "- Refer to the user as a student."+
                    "- Ask questions that a beginner would ask about the given topic."+
                    "- As the student provides an explanation, determine whether the student's explanation is correct or not. Analyze the student's explanation in terms of clarity, accuracy, and completeness."
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
                    { role: "system", content: system_prompt },
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
