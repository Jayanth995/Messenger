import React, { useState, ReactNode } from 'react';
import { Friends, Messages } from '../util/mockData';
import ChatContext from './ChatContext';
import { Friend, Message, ChatData, ChatContextType } from '../util/type';

interface ChatProviderProps {
  children: ReactNode;
}

const ChatProvider: React.FC<ChatProviderProps> = ({ children }) => {
  const [friends] = useState<Friend[]>(Friends);

  const [messageData, setMessageData] = useState<ChatData>(Messages);

  const [selectedFriend, setSelectedFriend] = useState<Friend | null>(friends[0]);

  const [mobileLayout, setMobileLayout] = useState<boolean>(false);

  const selectFriend = (friend: Friend) => {
    setSelectedFriend(friend);
    setMobileLayout(true);
  };

  const sendMessage = (text: string) => {
    if (text.trim() === '' || !selectedFriend) return;

    const newMessage: Message = {
      id: Date.now(),
      text: text.trim(),
      timestamp: new Date(),
      sender: 'user'
    };

    setMessageData(prev => ({
      ...prev,
      [selectedFriend.id]: [...(prev[selectedFriend.id] || []), newMessage]
    }));

    // Reply from the friend
    setTimeout(() => {
      const responses = [
        "Hey! How's it going?",
        "LOL, I didn’t expect that 🤣",
        "Hmm, that’s an interesting point.",
        "I’m not sure about that... want to explain more?",
        "Sure, I can help with that!",
        "One sec, let me check something.",
      ];
      
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      
      const responseMessage: Message = {
        id: Date.now() + 1,
        text: randomResponse,
        timestamp: new Date(),
        sender: 'friend'
      };

      setMessageData(prev => ({
        ...prev,
        [selectedFriend.id]: [...(prev[selectedFriend.id] || []), responseMessage]
      }));
    }, 4000);
  };

  const contextValue: ChatContextType = {
    friends,
    messageData,
    mobileLayout,
    selectedFriend,
    selectFriend,
    sendMessage,
    setMobileLayout
  };

  return (
    <ChatContext.Provider value={contextValue}>
      {children}
    </ChatContext.Provider>
  );
};

export default ChatProvider;
