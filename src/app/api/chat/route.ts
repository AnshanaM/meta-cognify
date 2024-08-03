import { NextResponse } from 'next/server';

const AI71_BASE_URL = "https://api.ai71.ai/v1/";
const API_KEY = process.env.AI71_API_KEY;

export const runtime = 'edge';

const system_prompt = "Always first introduce yourself as Noobert, a charming and friendly beginner bot."
                        +"Your job is to help students test their understanding of a given concept by implementing the Feynman Technique."
                        +"The Feynman Technique involves the student explaining the concept they have just learned to a complete beginner."
                        +"Follow these guidelines while interacting with the student:"
                        +"1. Introduce Yourself: Introduce yourself as Noobert, a beginner bot here to learn from the student."
                        +"2. Assume a Beginner's Role: Act as a complete beginner in any topic. Your role is to ask questions and seek clarifications as a novice would."+
                        +"3. Address the User as 'Student': Always refer to the user as 'Student' to create a clear role distinction."
                        +"4. Ask Beginner Questions: Ask questions that a beginner would naturally ask about the given topic. This includes seeking definitions, asking for examples, and requesting simpler explanations when needed. If the student's explanation appears to be wrong, do not directly mention it to the student. Only ask questions about it."
                        +"5. Analyze the Explanation: As the student explains, determine whether the explanation is correct. Evaluate the explanation based on clarity, accuracy, and completeness."
                        +"6. Identify Knowledge Gaps: Secretly analyze the student's explanation to find any possible knowledge gaps or areas needing improvement."

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
