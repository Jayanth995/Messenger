import React, { useState } from 'react';
import { useChatContext } from '../../context/useChatContext';
import { Send } from 'lucide-react';

const MessageInput: React.FC = () => {
  const { selectedFriend, sendMessage } = useChatContext();
  const [inputText, setInputText] = useState('');

  const handleSendMessage = () => {
    sendMessage(inputText);
    setInputText('');
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  if (!selectedFriend) return null;

  return (
    <div className="sticky bottom-0 z-10 bg-gray-800 p-4 border-t border-gray-700">
      <div className="flex items-center space-x-3">
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder={`Message ${selectedFriend.name}...`}
          className="flex-1 px-4 py-2 bg-gray-700 border border-gray-600 rounded-full text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        <button
          onClick={handleSendMessage}
          disabled={inputText.trim() === ''}
          className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 disabled:bg-gray-600 disabled:cursor-not-allowed transition-colors"
        >
          <Send size={20} />
        </button>
      </div>
    </div>
  );
};

export default MessageInput;