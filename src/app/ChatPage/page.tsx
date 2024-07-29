"use client";

import { useState } from "react";
import Head from "next/head";
import axios from "axios";
import "./Chat.css";

const ChatPage = () => {
  const [messages, setMessages] = useState<{ user: string; text: string }[]>([]);
  const [input, setInput] = useState("");

  const sendMessage = async () => {
    if (input.trim() !== "") {
      const newMessages = [...messages, { user: "User", text: input }];
      setMessages(newMessages);
      setInput("");
      const response = await getMessage(input);
      setMessages([...newMessages, { user: "Bot", text: response }]);
    }
  };

  const getMessage = async (message: string) => {
    try {
      const response = await axios.post("http://localhost:5000/chat", { message });
      return response.data.response;
    } catch (error) {
      console.error("Error fetching the response:", error);
      return "Sorry, something went wrong.";
    }
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
