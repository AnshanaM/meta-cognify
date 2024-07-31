"use client"
import '../styles/Chat.css';
import { useChat } from 'ai/react';
import { FormEvent } from 'react';

const ChatPage = () => {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: '/api/chat',
  });

  const renderResponse = () => {
    return messages.map((m) => (
      <div key={m.id}>
        {m.role === "user" ? "User: " : "Noobert: "}
        {m.content}
      </div>
    ));
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSubmit;
  };

  return (
    <div className="app">
      <section className="side-bar">
        <button className='new-topic'>+ New Topic</button>
        <ul className="history">
          <li>
            BLURGH
          </li>
        </ul>
        <nav>
          <p>Powered by AI71</p>
        </nav>
      </section>
      <section className='main'>
        <h1>Noobert</h1>
        <ul className='feed'>
          {renderResponse()}
        </ul>
        <form className="bottom-section" onSubmit={handleSubmit}>
          <div className='input-container'>
            <input 
              className='input-field' 
              value={input} 
              placeholder='Say something...' 
              onChange={handleInputChange}
            />
            <button 
              type="submit" 
              className='submit'
            >
              send
            </button>
          </div>
          <p className='info'>
            Using the Falcon 2 180 B models.
          </p>
        </form>
      </section>
    </div>
  );
};

export default ChatPage;
