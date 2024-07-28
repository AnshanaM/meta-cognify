"use client";

import { useState } from "react";
import Head from "next/head";
import "./Chat.css";

const ChatPage = () => {
  const [messages, setMessages] = useState<{ user: string; text: string }[]>([]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (input.trim() !== "") {
      const newMessages = [...messages, { user: "User", text: input }];
      setMessages(newMessages);
      setInput("");
      getMessage(newMessages);
    }
  };

  const getMessage = (currentMessages: { user: string; text: string }[]) => {
    setTimeout(() => {
      setMessages([...currentMessages, { user: "Bot", text: "Hi, I'm Noobert" }]);
    }, 500); // Simulating a delay for the bot response
  };

  return (
    <>
      <Head>
        <title>Noobert</title>
      </Head>
      <div className="chatContainer">
        <div className="chatWindow">
          {messages.map((msg, index) => (
            <div key={index} className={`chatMessage ${msg.user.toLowerCase()}`}>
              <span>{msg.text}</span>
            </div>
          ))}
        </div>
        <div className="inputContainer">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") sendMessage();
            }}
            placeholder="Type a message..."
          />
          <button onClick={sendMessage}>Send</button>
        </div>
      </div>
    </>
  );
};

export default ChatPage;
