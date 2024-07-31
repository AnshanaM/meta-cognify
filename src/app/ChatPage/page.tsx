"use client"

import '../styles/Chat.css';

const ChatPage = () => {
  
  const getMessages = async () => {
    console.log("press")
    const options = {
      method: "POST",
      body: JSON.stringify({
        message: "hello how are you?"
      }),
      headers: {
        "Content-Type": "application/json"
      }
    }
    try {
      console.log("press")
      const response = await fetch('https://localhost:8000/completions', options)
      console.log(`Status: ${response.status}`);
      if (!response.ok) {
        // Handle errors from the server
        const errorData = await response.json();
        console.error('Server error:', errorData);
        return;
    }
      const data = await response.json()
      console.log(data)
    } catch (error) {
      console.error(error)
      
    }
  }

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
          
        </ul>
        <div className="bottom-section">
          <div className='input-container'>
            <input className='input-field' />
            <div id='submit' onClick={getMessages}>➢</div>
          </div>
          <p className='info'>
            Using the Falcon 2 180 B models.
          </p>
        </div>
      </section>
    </div>
  );
};

export default ChatPage;
