import React from 'react';
import { useChatContext } from '../../context/useChatContext';
import ChatHeader from '../ChatSpace/ChatHeader';
import ChatHistory from '../ChatHistory/ChatHistory';
import MessageInput from '../MessageInput/MessageInput';

const ChatSpace: React.FC = () => {
  const { selectedFriend } = useChatContext();

  if (!selectedFriend) {
    return (
      <div className="flex-1 flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h3 className="text-lg font-medium text-gray-900 mb-2">Select a friend to start chatting</h3>
          {/* <p className="text-gray-500">Choose a friend from the sidebar to begin your conversation</p> */}
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 flex flex-col bg-gray-900 text-gray-100">
      <ChatHeader />
      <ChatHistory />
      <MessageInput />
    </div>
  );
};

export default ChatSpace;