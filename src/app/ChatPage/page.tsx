// "use client"

// import React, { useState, FormEvent } from 'react';
// import '../styles/Chat.css';

// interface Message {
//   id: number;
//   role: 'user' | 'assistant';
//   content: string;
// }

// const ChatPage = () => {
//   const [messages, setMessages] = useState<Message[]>([]);
//   const [input, setInput] = useState('');

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setInput(e.target.value);
//   };

//   const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     if (input.trim() === '') return;

//     const userMessage: Message = { role: 'user', content: input, id: Date.now() };
//     // setMessages((prevMessages) => [...prevMessages, userMessage]);

//     // Send the user's message to the server
//     const response = await fetch('/api/chat', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ messages: [{ role: 'user', content: input }] }),
//     });

//     const data = await response.json();
//     if (data.choices && data.choices[0].message.content) {
//       const botMessage: Message = {
//         role: 'assistant',
//         content: data.choices[0].message.content,
//         id: Date.now() + 1,
//       };
//       setMessages((prevMessages) => [...prevMessages, userMessage, botMessage]);
//     }

//     // Clear input
//     setInput('');
//   };

//   const renderResponse = () => {
//     return messages.map((m) => (
//       <div key={m.id} className='message'>
//         {m.role === "user" ? "User: " : `Noobert: `}
//         {m.content}
//       </div>
//     ));
//   };

//   return (
//     <div className="app">
//       <section className="side-bar">
//         <button className='new-topic'>+ New Topic</button>
//         <ul className="history">
//           <li>
//             BLURGH
//           </li>
//         </ul>
//         <nav>
//           <p>Powered by AI71</p>
//         </nav>
//       </section>
//       <section className='main'>
//         <h1>Noobert</h1>
//         <ul className='feed'>
//           {renderResponse()}
//         </ul>
//         <form className="bottom-section" onSubmit={handleSubmit}>
//           <div className='input-container'>
//             <input 
//               className='input-field' 
//               value={input} 
//               placeholder='Say Something...' 
//               onChange={handleInputChange}
//             />
//             <button 
//               type="submit" 
//               className='submit'
//             >↑</button>
//           </div>
//           <p className='info'>
//             Using the Falcon 2 180B models.
//           </p>
//         </form>
//       </section>
//     </div>
//   );
// };

// export default ChatPage;


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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (input.trim() === '') return;

    const userMessage: Message = { role: 'user', content: input, id: Date.now() };
    setMessages((prevMessages) => [...prevMessages, userMessage]);

    // Send the user's message to the server
    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ messages: [{ role: 'user', content: input }] }),
    });

    const data = await response.json();
    if (data.choices && data.choices[0].message.content) {
      const botMessage: Message = {
        role: 'assistant',
        content: data.choices[0].message.content,
        id: Date.now() + 1,
      };
      setMessages((prevMessages) => [...prevMessages, botMessage]);
    }

    // Clear input
    setInput('');
  };

  const renderResponse = () => {
    return messages.map((m) => (
      <div key={m.id} className={`message ${m.role}`}>
        {m.role === 'user' ? 'User: ' : 'Noobert: '}
        {m.content}
      </div>
    ));
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
              placeholder='Say Something...' 
              onChange={handleInputChange}
            />
            <button 
              type="submit" 
              className='submit'
            >↑</button>
          </div>
          <p className='info'>
            Using the Falcon 2 180B models.
          </p>
        </form>
      </section>
    </div>
  );
};

export default ChatPage;
