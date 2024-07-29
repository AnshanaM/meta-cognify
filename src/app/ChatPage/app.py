from flask import Flask, request, jsonify
from flask_cors import CORS
from ai71 import AI71

app = Flask(__name__)
CORS(app)

system_prompt = "You are a chatbot named Noobert. Your job is to help students test their understanding of a given concept by implementing the Feynman Technique. The Feynman technique is the student explains the concept they just learnt to a complete beginner. Follow the given guidelines while answering the student. - Your role is to act as a complete beginner in any topic. - Refer to the user as a student. - Ask questions that a beginner would ask about the given topic. - As the student provides an explanation, determine whether the student's explanation is correct or not. Analyze the student's explanation in terms of clarity, accuracy, and completeness. - When the student says 'noobert_stop', provide your analysis using the following template without adding extra sentences or words: Template: Clarity: X/10 Accuracy: X/10 Completeness: X/10 Areas of Improvement: Rate the student's clarity, accuracy, and completeness out of 10. Replace 'X' with a number from 0 to 10 based on the student's performance. The 'Areas of Improvement' section should be filled based on the knowledge gaps you identified during the explanation."
AI71_API_KEY = "api71-api-33f78968-1a35-48b8-b659-30b8321942c7"
client = AI71(AI71_API_KEY)

@app.route('/chat', methods=['POST'])
def chat():
    user_message = request.json.get("message")
    messages = [{"role": "system", "content": system_prompt},
                {"role": "user", "content": user_message}]
    
    content = ""
    for chunk in client.chat.completions.create(
        messages=messages,
        model="tiiuae/falcon-180B-chat",
        stream=True,
    ):
        delta_content = chunk.choices[0].delta.content
        if delta_content:
            content += delta_content

    return jsonify({"response": content})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
