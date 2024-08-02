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

const SocraChat = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [logicalCoherence, setLogicalCoherence] = useState(0);
  const [conceptualClarity, setConceptualClarity] = useState(0);
  const [reflectionInsight, setReflectionInsight] = useState(0);
  const [responseQuality, setResponseQuality] = useState(0);
  const [areasOfImprovement, setAreasOfImprovement] = useState("");
  const [showAnalytics, setShowAnalytics] = useState(false);
  const [isTopicSet, setIsTopicSet] = useState(false);
  const [topic, setTopic] = useState("");

  const clickAnalytics = async () => {
    const analysisRequestMessage = {
      role: 'user',
      content: "Provide your analysis using the following template without adding extra sentences or words. Do not use any new line characters."
                +"Template: Logical Coherence : X/10 Conceptual Clarity : X/10 Reflection and Insight : X/10 Response Quality : X/10 "
                +"Areas of Improvement: Provide specific and actionable feedback based on the conversation you had with the student. Highlight any gaps in understanding, missed details, or inaccuracies. Suggest ways the student can improve their thinking."
                +"Instructions for Rating:"
                +"Logical Coherence: Evaluate how logically consistent and structured the student's arguments are."
                +"Conceptual Clarity: Assess how clearly the student explains and understands the concepts discussed."
                +"Reflection and Insight: Determine the level of reflection and new insights shown by the student."
                +"Response Quality: Judge the depth and relevance of the student's responses."
                
    };

    try {
      const response = await fetch('/api/socraChat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: [...messages, analysisRequestMessage] }),
      });

      const data = await response.json();
      const analysisResponse = data.assistantMessageContent;

      const lcMatch = analysisResponse.match(/Logical Coherence: (\d+)\/10/);
      const ccMatch = analysisResponse.match(/Conceptual Clarity: (\d+)\/10/);
      const riMatch = analysisResponse.match(/Reflection and Insight: (\d+)\/10/);
      const rqMatch = analysisResponse.match(/Response Quality: (\d+)\/10/);
      const areasOfImprovementMatch = analysisResponse.match(/Areas of Improvement:\s*([\s\S]*)/);

      const lcScore = lcMatch ? parseInt(lcMatch[1], 10) * 10 : 0;
      const ccScore = ccMatch ? parseInt(ccMatch[1], 10) * 10 : 0;
      const riScore = riMatch ? parseInt(riMatch[1], 10) * 10 : 0;
      const rqScore = rqMatch ? parseInt(rqMatch[1], 10) * 10 : 0;
      const areasOfImprovementText = areasOfImprovementMatch ? areasOfImprovementMatch[1].trim() : '';

      setShowAnalytics(true);
      setLogicalCoherence(lcScore);
      setConceptualClarity(ccScore);
      setReflectionInsight(riScore);
      setResponseQuality(rqScore);
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
      setInput("I would like to talk about the following topic, " + topic)
    }
    e.preventDefault();
    if (input.trim() === '') return;
  
    setLoading(true);
  
    const userMessage: Message = { role: 'user', content: input, id: Date.now() };
    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
  
    try {
      const response = await fetch('/api/socraChat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: updatedMessages }),
      });
  
      const data = await response.json();
      if (data.assistantMessageContent) {
        // Remove 'User:' from the end if it exists
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
  
  const averageProgress: number = parseFloat(((logicalCoherence + reflectionInsight + responseQuality + conceptualClarity) / 4).toFixed(1));

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
                    <label>Logical Coherence</label>
                    <ProgressBar progress={logicalCoherence} color="#8D1F66" />
                  </div>
                  <div className='progress-bar-wrapper'>
                    <label>Conceptual Clarity</label>
                    <ProgressBar progress={conceptualClarity} color='#6F1C84' />
                  </div>
                  <div className='progress-bar-wrapper'>
                    <label>Reflection & Insight</label>
                    <ProgressBar progress={reflectionInsight} color='#481888' />
                  </div>
                  <div className='progress-bar-wrapper'>
                    <label>Response Quality</label>
                    <ProgressBar progress={responseQuality} color='#481888' />
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

export default SocraChat;
