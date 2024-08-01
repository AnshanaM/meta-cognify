"use client"
import React, { useState, FormEvent } from 'react';
import '../styles/Chat.css';

interface Message {
  id: number;
  role: 'user' | 'assistant';
  content: string;
}

const ChatPage = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

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
    } catch (error) {
      console.error('Error fetching the chat response:', error);
    }

    setLoading(false);
    setInput('');
  };

  const renderResponse = () => {
    return messages.map((m) => (
      <div key={m.id} className={`message ${m.role}`}>
        {m.role === 'assistant' && (
          <img src='/bot.png' alt='Noobert' className='avatar' />
        )}
        <div className='message-content'>{m.content}</div>
        {m.role === 'user' && (
          <img src='/user.png' alt='User' className='avatar' />
        )}
      </div>
    ));
  };

  return (
    <div className="app">
      <section className="side-bar">
        <button className='new-topic'>Get Analytics</button>
        <section className="history">
          <div>
            add analytics
          </div>
        </section>
        {/* <nav>
          <p>Powered by AI71</p>
        </nav> */}
      </section>
      <section className='main'>
        <h1>Noobert</h1>
        <ul className='feed'>
          {renderResponse()}
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
