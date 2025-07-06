import React from 'react';
import ChatProvider  from '../../context/ChatProvider';
import FriendList from '../FriendList/FriendList';
import ChatSpace from '../ChatSpace/ChatSpace';

const Messenger: React.FC = () => {
  return (
    <ChatProvider>
      <div className="flex h-screen bg-gray-900">
        <FriendList />
        <ChatSpace />
      </div>
    </ChatProvider>
  );
};

export default Messenger;