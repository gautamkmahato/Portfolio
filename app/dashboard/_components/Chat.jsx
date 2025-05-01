'use client';

import Link from "next/link";
import { useState } from "react";
import chai from '../../../public/chai.png'
import Image from "next/image";

export default function ChatWidget() {
  const [query, setQuery] = useState('');
  const [messages, setMessages] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);


  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!query.trim()) return;

    // Add user message immediately
    setMessages(prev => [...prev, { type: 'user', text: query }]);
    setQuery('');
    setLoading(true);

    try {
      const res = await fetch('http://127.0.0.1:8000/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ query })
      });

      const result = await res.json();
      console.log("Assistant Response:", result);

      setMessages(prev => [...prev, { type: 'assistant', text: result.assistant_response }]);
    } catch (error) {
      console.error("Error during fetch:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Floating Chat Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          className="bg-orange-600 text-white p-3 rounded-full shadow-lg shadow-gray-500 hover:bg-orange-700 transition cursor-pointer flex items-center justify-center"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="relative w-10 h-10"> {/* or w-8 h-8 for slightly bigger */}
            <Image
              src={chai}
              alt="logo"
              fill
              className="object-contain"
            />
          </div>
        </button>
      </div>

      {/* Chat Box */}
      {isOpen && (
        <div className="fixed bottom-20 right-6 w-96 h-112 bg-white shadow-2xl rounded-lg flex flex-col overflow-hidden z-50">
          {/* Header */}
          <div className="bg-orange-600 text-white p-3 flex justify-between items-center">
            <h2 className="text-lg font-semibold">Chat Assistant</h2>
            <button onClick={() => setIsOpen(false)} className="text-white cursor-pointer">&times;</button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`px-4 py-2 rounded-lg max-w-xs text-sm whitespace-pre-wrap font-[family-name:var(--font-geist-mono)] text-sm/6 sm:text-left ${
                  msg.type === 'user'
                    ? 'bg-orange-300 text-neutral'
                    : 'bg-gray-100 text-gray-800'
                }`}>
                  {msg.type === 'assistant' ? (
                    <AssistantMessage text={msg.text} />
                  ) : (
                    msg.text
                  )}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="px-4 py-2 bg-gray-100 text-gray-400 rounded-lg text-sm max-w-xs">
                  Typing...
                </div>
              </div>
            )}
          </div>

          {/* Input Box */}
          <form onSubmit={handleSubmit} className="p-3 border-t border-gray-400 flex">
            <input
              type="text"
              className="flex-1 border border-gray-300 rounded-l-md px-3 py-2 text-sm focus:outline-none"
              placeholder="Type a message..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button
              type="submit"
              className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-r-md text-sm cursor-pointer"
            >
              Send
            </button>
          </form>
        </div>
      )}
    </>
  );
}

// Assistant Message Component
function AssistantMessage({ text }) {
  // Split the main message and sources
  const [mainText, sourcesText] = text.split('Sources:');

  // Find the first URL inside the sources (if exists)
  const urlMatch = sourcesText?.match(/\[URL\]:\s*(\S+)/);

  return (
    <div className="flex flex-col space-y-2">
      <div>{mainText.trim()}</div>

      {sourcesText && (
        <div className="text-xs text-gray-500">
          Source:{' '}
          {urlMatch ? (
            <Link
              href={urlMatch[1]}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline break-all"
            >
              {urlMatch[1]}
            </Link>
          ) : (
            <span>{sourcesText.trim()}</span>
          )}
        </div>
      )}
    </div>
  );
}
