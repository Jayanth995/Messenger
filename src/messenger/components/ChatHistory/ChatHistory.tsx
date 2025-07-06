import React, { useEffect, useRef } from 'react';
import { useChatContext } from '../../context/useChatContext';
import { formatTime } from '../../util/util';

const ChatHistory: React.FC = () => {
  const { messageData, selectedFriend } = useChatContext();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messageData, selectedFriend]);


  if (!selectedFriend) return null;

  const messages = selectedFriend ? messageData[selectedFriend.id] || [] : [];

  return (
    <div className="flex-shrink-0 overflow-y-auto p-4 space-y-4">
      {messages.map(message => (
        <div
          key={message.id}
          className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
        >
          <div
            className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
              message.sender === 'user'
                ? 'bg-blue-500 text-white'
                : 'bg-gray-200 text-gray-800'
            }`}
          >
            <p className="text-sm">{message.text}</p>
            <p className={`text-xs mt-1 ${
              message.sender === 'user' ? 'text-blue-100' : 'text-gray-500'
            }`}>
              {formatTime(message.timestamp)}
            </p>
          </div>
        </div>
      ))}
      <div ref={messagesEndRef} />
    </div>
  );
};

export default ChatHistory;