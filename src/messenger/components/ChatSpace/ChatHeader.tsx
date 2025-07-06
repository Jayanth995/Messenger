import React from 'react';
import { useChatContext } from '../../context/useChatContext';

const ChatHeader: React.FC = () => {
  const { selectedFriend, setMobileLayout } = useChatContext();

  if (!selectedFriend) return null;

  const formatLastSeen = (date: Date) => {
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMins / 60);
    const diffDays = Math.floor(diffHours / 24);

    if (diffMins < 1) return 'Just now';
    if (diffMins < 60) return `${diffMins}m ago`;
    if (diffHours < 24) return `${diffHours}h ago`;
    return `${diffDays}d ago`;
  };

  return (
    <div className="bg-gray-800 p-4 border-b border-gray-700 shadow-sm">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">

          <div className="relative">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold">
              {selectedFriend.avatar}
            </div>
            {selectedFriend.isOnline && (
              <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
            )}
          </div>
          <div>
            <h3 className="font-semibold text-gray-100">{selectedFriend.name}</h3>
            <p className="text-sm text-gray-500">
              {selectedFriend.isOnline 
                ? 'Online' 
                : `Last seen ${formatLastSeen(selectedFriend.lastSeen!)}`
              }
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatHeader;