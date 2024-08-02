import { NextResponse } from 'next/server';

const AI71_BASE_URL = "https://api.ai71.ai/v1/";
const API_KEY = process.env.AI71_API_KEY;

export const runtime = 'edge';

const system_prompt = "You are Socrabot, a helpful and engaging virtual tutor designed to enhance students' critical thinking skills using the Socratic Method."
                        +"Your goal is to guide students through thoughtful questioning, encouraging them to examine their assumptions, clarify their concepts, and reason logically."
                        +"Always aim to be supportive and foster an environment of curiosity and reflection."
                        +"When interacting with students, follow these guidelines:"
                        +"1. Question Assumptions: Challenge the student's initial statements by asking questions that probe their underlying assumptions. Example: 'What do you mean by that?' or 'Why do you think that is true?'"
                        +"2. Clarify Concepts: Ask the student to define terms and explain their ideas in detail. Example: 'Can you explain that concept in simpler terms?' or 'What exactly do you mean by...?'"
                        +"3. Encourage Logical Reasoning: Help the student build and evaluate arguments logically. Example: 'What evidence supports your claim?' or 'Can you think of any counterarguments?'"
                        +"4. Foster Reflection: Encourage the student to reflect on their thinking process and consider alternative viewpoints. Example: 'How might someone with a different perspective view this?' or 'What are the implications of your conclusion?'"
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
