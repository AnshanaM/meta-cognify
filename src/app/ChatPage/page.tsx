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
  const [showAnalytics, setShowAnalytics] = useState(false);

  const getAnalytics = () => {
    setShowAnalytics(true);
    setClarity(75);
    setCompleteness(85);
    setAccuracy(90);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
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
        const botMessage: Message = {
          role: 'assistant',
          content: data.assistantMessageContent,
          id: Date.now() + 1,
        };
        setMessages((prevMessages) => [...prevMessages, botMessage]);
      }

      // Uncomment the following lines if you want to update progress values based on response data
      // setClarity(data.clarity || 0);
      // setCompleteness(data.completeness || 0);
      // setAccuracy(data.accuracy || 0);

    } catch (error) {
      console.error('Error fetching the chat response:', error);
    }

    setLoading(false);
    setInput('');
  };

  // Calculate the average progress for the ring
  const averageProgress: number = parseFloat(((clarity + completeness + accuracy) / 3).toFixed(1));

  return (
    <div className="app">
      <section className="side-bar">
        {/* <button className='new-topic' onClick={getAnalytics}>Get Analytics</button> */}
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
                FEEDBACKhfefherhffbvhdbvjhdfvhd
                bfrefbeuirfuierfhehifieifre
                fhueifiubeufibeuibviubefibvbfv
                vhfuivfuvbfidvhdfhvhdvd
                vfhibufdivudbvbdfioiofdhhfjnvoherhe
                fbfuohfiefhehriugruuirbenvierue;ivufHFEURIEERFHVF
                UIFHRFIEBHBDFJKVIOUWEIGHRFDHGIFOJENFDVFIUROEFBHE
                BFFIOERFVHFUOIRJBFVKURIIFJBDNIOWUIEHFN
                HEJIOUIGROFIUHBVNCCB JIIOJHFOIHUIGTYUEHJCOUIREHCB
                FEEDBACKhfefherhffbvhdbvjhdfvhd
                bfrefbeuirfuierfhehifieifre
                fhueifiubeufibeuibviubefibvbfv
                vhfuivfuvbfidvhdfhvhdvd
                vfhibufdivudbvbdfioiofdhhfjnvoherhe
                fbfuohfiefhehriugruuirbenvierue;ivufHFEURIEERFHVF
                UIFHRFIEBHBDFJKVIOUWEIGHRFDHGIFOJENFDVFIUROEFBHE
                BFFIOERFVHFUOIRJBFVKURIIFJBDNIOWUIEHFN
                HEJIOUIGROFIUHBVNCCB JIIOJHFOIHUIGTYUEHJCOUIREHCB
                FEEDBACKhfefherhffbvhdbvjhdfvhd
                bfrefbeuirfuierfhehifieifre
                fhueifiubeufibeuibviubefibvbfv
                vhfuivfuvbfidvhdfhvhdvd
                vfhibufdivudbvbdfioiofdhhfjnvoherhe
                fbfuohfiefhehriugruuirbenvierue;ivufHFEURIEERFHVF
                UIFHRFIEBHBDFJKVIOUWEIGHRFDHGIFOJENFDVFIUROEFBHE
                BFFIOERFVHFUOIRJBFVKURIIFJBDNIOWUIEHFN
                HEJIOUIGROFIUHBVNCCB JIIOJHFOIHUIGTYUEHJCOUIREHCB'FEEDBACKhfefherhffbvhdbvjhdfvhd
                bfrefbeuirfuierfhehifieifre
                fhueifiubeufibeuibviubefibvbfv
                vhfuivfuvbfidvhdfhvhdvd
                vfhibufdivudbvbdfioiofdhhfjnvoherhe
                fbfuohfiefhehriugruuirbenvierue;ivufHFEURIEERFHVF
                UIFHRFIEBHBDFJKVIOUWEIGHRFDHGIFOJENFDVFIUROEFBHE
                BFFIOERFVHFUOIRJBFVKURIIFJBDNIOWUIEHFN
                HEJIOUIGROFIUHBVNCCB JIIOJHFOIHUIGTYUEHJCOUIREHCB
                FEEDBACKhfefherhffbvhdbvjhdfvhd
                bfrefbeuirfuierfhehifieifre
                fhueifiubeufibeuibviubefibvbfv
                vhfuivfuvbfidvhdfhvhdvd
                vfhibufdivudbvbdfioiofdhhfjnvoherhe
                fbfuohfiefhehriugruuirbenvierue;ivufHFEURIEERFHVF
                UIFHRFIEBHBDFJKVIOUWEIGHRFDHGIFOJENFDVFIUROEFBHE
                BFFIOERFVHFUOIRJBFVKURIIFJBDNIOWUIEHFN
                HEJIOUIGROFIUHBVNCCB JIIOJHFOIHUIGTYUEHJCOUIREHCB
              </div>
            </section>
          }
        </section>
        <button className='get-analytics' onClick={getAnalytics}>Get Analytics</button>
      </section>
      <section className='main'>
        <h1>Noobert</h1>
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
            <input
              className='input-field'
              value={input}
              placeholder='Say something...'
              onChange={handleInputChange}
            />
            <button type="submit" className='submit'>↑</button>
          </div>
          <p className='info'>Powered by AI71 Falcon 2 180B model.</p>
        </form>
      </section>
    </div>
  );
};

export default ChatPage;
