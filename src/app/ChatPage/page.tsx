"use client"
import React, { useState, FormEvent } from 'react';
import '../styles/Chat.css';
import ProgressBar from '../components/ProgressBar';
import ProgressRing from '../components/ProgressRing';

interface Message {
  id: number;
  role: 'user' | 'assistant';
  content: string;
}

const ChatPage = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [clarity, setClarity] = useState(0);
  const [completeness, setCompleteness] = useState(0);
  const [accuracy, setAccuracy] = useState(0);
  const [areasOfImprovement, setAreasOfImprovement] = useState("");
  const [showAnalytics, setShowAnalytics] = useState(false);
  const [isTopicSet, setIsTopicSet] = useState(false);
  const [topic, setTopic] = useState("");

  const clickAnalytics = async () => {
    const analysisRequestMessage = {
      role: 'user',
      content: "Provide your analysis using the following template without adding extra sentences or words. Do not use any new line characters."
                +"Template: Clarity: X/10 Accuracy: X/10 Completeness: X/10"
                +"Areas of Improvement: Provide specific and actionable feedback on the student's explanation. Highlight any gaps in understanding, missed details, or inaccuracies. Suggest ways the student can improve their explanation."
                +"Instructions for Rating:"
                +"Clarity: Evaluate how clearly the student communicated their explanation. Was it easy to follow and understand?"
                +"Accuracy: Assess the correctness of the information provided by the student. Did they convey the right facts?"
                +"Completeness: Determine how thoroughly the student covered the topic. Did they include all relevant points and details?"
                +"Replace 'X' with a number from 0 to 10 based on the student's performance. The 'Areas of Improvement' section should be filled based on the knowledge gaps you identified during the explanation. Be specific and constructive in your feedback."
    };

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: [...messages, analysisRequestMessage] }),
      });

      const data = await response.json();
      const analysisResponse = data.assistantMessageContent;

      const clarityMatch = analysisResponse.match(/Clarity: (\d+)\/10/);
      const accuracyMatch = analysisResponse.match(/Accuracy: (\d+)\/10/);
      const completenessMatch = analysisResponse.match(/Completeness: (\d+)\/10/);
      const areasOfImprovementMatch = analysisResponse.match(/Areas of Improvement:\s*([\s\S]*?)\s*(?:User:\s*)?$/);

      const clarityScore = clarityMatch ? parseInt(clarityMatch[1], 10) * 10 : 0;
      const accuracyScore = accuracyMatch ? parseInt(accuracyMatch[1], 10) * 10 : 0;
      const completenessScore = completenessMatch ? parseInt(completenessMatch[1], 10) * 10 : 0;
      const areasOfImprovementText = areasOfImprovementMatch ? areasOfImprovementMatch[1].trim() : '';

      setShowAnalytics(true);
      setClarity(clarityScore);
      setCompleteness(completenessScore);
      setAccuracy(accuracyScore);
      setAreasOfImprovement(areasOfImprovementText);

    } catch (error) {
      console.error('Error fetching analytics:', error);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleTopicChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTopic(e.target.value);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    if (!isTopicSet) {
      setTopic(topic)
      setIsTopicSet(true)
      setInput("I would like to teach you about " + topic)
    }
    e.preventDefault();
    if (input.trim() === '') return;
  
    setLoading(true);
  
    const userMessage: Message = { role: 'user', content: input, id: Date.now() };
    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
  
    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: updatedMessages }),
      });
  
      const data = await response.json();
      if (data.assistantMessageContent) {
        // Remove trailing hashtags if they exist (they come due to internal formatting sometimes?)
        let content = data.assistantMessageContent;
        content = content.replace(/#+\s*$/, '').trim(); // remove trailing hashtags
        content = content.replace(/User:\s*$/, '').trim(); // Remove trailing "User:"

        const botMessage: Message = {
          role: 'assistant',
          content: content,
          id: Date.now() + 1,
        };
        setMessages((prevMessages) => [...prevMessages, botMessage]);
      }
  
    } catch (error) {
      console.error('Error fetching the chat response:', error);
    }
  
    setLoading(false);
    setInput('');
  };
  
  const averageProgress: number = parseFloat(((clarity + completeness + accuracy) / 3).toFixed(1));

  return (
    <div className="app">
      <section className="side-bar">
        <button className='get-analytics' onClick={clickAnalytics}>Get Analytics</button>
        <section className="analytics">
          {showAnalytics &&
            <section className='content'>
              <div className='graphs'>
                <div className='progress-bars'>
                  <div className='progress-bar-wrapper'>
                    <label>Clarity</label>
                    <ProgressBar progress={clarity} color="#8D1F66" />
                  </div>
                  <div className='progress-bar-wrapper'>
                    <label>Completeness</label>
                    <ProgressBar progress={completeness} color='#6F1C84' />
                  </div>
                  <div className='progress-bar-wrapper'>
                    <label>Accuracy</label>
                    <ProgressBar progress={accuracy} color='#481888' />
                  </div>
                </div>
                <div className='progress-ring-wrapper'>
                  <ProgressRing progress={averageProgress} radius={50} stroke={10} />
                  <label>Average</label>
                </div>
              </div>
              <div className='feedback'>
                <b><p>Areas of Improvement:</p></b>
                <p>{areasOfImprovement}</p>
              </div>
            </section>
          }
        </section>
      </section>
      <section className='main'>
        {!topic ? null : <h1>{topic}</h1>}
        <ul className='feed'>
          {messages.map((m) => (
            <div key={m.id} className={`message ${m.role}`}>
              {m.role === 'assistant' && (
                <img src='/bot.png' alt='Noobert' className='avatar' />
              )}
              <div className='message-content'>{m.content}</div>
              {m.role === 'user' && (
                <img src='/user.png' alt='User' className='avatar' />
              )}
            </div>
          ))}
        </ul>
        <form className="bottom-section" onSubmit={handleSubmit}>
          {loading && <div className="loading-dots"><span>.</span><span>.</span><span>.</span></div>}
          <div className='input-container'>
            {
              !isTopicSet ? 
                <input
                  className='input-field'
                  value={topic}
                  placeholder='Enter a topic to start study session...'
                  onChange={handleTopicChange}
                />
              : 
                <input
                  className='input-field'
                  value={input}
                  placeholder={`Explain ${topic} ...`}
                  onChange={handleInputChange}
                />
            }
            <button type="submit" className='submit'>↑</button>
          </div>
          <p className='info'>Powered by AI71 Falcon 2 180B model.</p>
        </form>
      </section>
    </div>
  );
};

export default ChatPage;
