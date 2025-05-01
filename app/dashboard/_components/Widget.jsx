'use client';

import Link from "next/link";
import { useState } from "react";
import chai from '../../../public/chai.png';
import chai_icon from '../../../public/chai-icon.png';
import icon from '../../../public/icon-2.png';
import Image from "next/image";
import { Send } from "lucide-react";

export default function Widget() {
  const [query, setQuery] = useState('');
  const [messages, setMessages] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!query.trim()) return;

    setMessages(prev => [...prev, { type: 'user', text: query }]);
    setQuery('');
    setLoading(true);

    try {
      const res = await fetch('http://127.0.0.1:8000/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
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
      {/* Floating Chat Button (Top Center) */}
      <div className="">
        <button
          className="bg-orange-500 text-white text-[13px] px-4 py-2.5 rounded-full shadow-lg hover:bg-orange-700 transition cursor-pointer flex items-center justify-center"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="relative text-orange-200 w-4 h-4 mr-1">
            <Image
              src={icon}
              alt="logo"
              fill
              className="object-contain"
            />
          </div>
          Chai AI
        </button>
      </div>

      {/* Chat Box */}
      {isOpen && (
        <div className="fixed top-20 left-1/2 transform -translate-x-1/2 w-144 max-h-[80vh] bg-white shadow-2xl rounded-lg flex flex-col overflow-hidden z-50">
          {/* Header */}
          <div className="bg-orange-500 text-white p-3 flex justify-between items-center">
            <h2 className="text-lg font-semibold">Chai AI</h2>
            <button onClick={() => setIsOpen(false)} className="text-white text-2xl font-bold cursor-pointer">&times;</button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`px-4 py-2 rounded-lg max-w-md text-sm whitespace-pre-wrap font-mono ${
                  msg.type === 'user'
                    ? 'bg-orange-300 text-neutral-800'
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
          <form onSubmit={handleSubmit} className="p-3 border-t border-gray-100 flex">
            <input
              type="text"
              className="flex-1 border border-gray-300 rounded-l-md px-3 py-3 text-sm focus:outline-none"
              placeholder="Ask your question..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button
              type="submit"
              className="bg-orange-500 hover:bg-orange-700 text-white px-5 py-2 rounded-r-md text-sm cursor-pointer"
            >
              Send
            </button>
          </form>
        </div>
      )}
    </>
  );
}

function AssistantMessage({ text }) {
  const [mainText, sourcesText] = text.split('Sources:');
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
              className="text-orange-500 underline break-all"
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
