import React from 'react';
import { useChatContext } from '../../context/useChatContext';
import { formatTime, formatLastSeen } from '../../util/util';
import { ChatContextTypeOrNull } from '../../util/type';

const FriendList: React.FC = () => {
  const chatContext: ChatContextTypeOrNull = useChatContext();
 
  const { friends, selectedFriend, selectFriend, messageData, mobileLayout, setMobileLayout } = chatContext;

  return (
    <div className="bg-gray-900 border-r border-gray-700 flex flex-col">
      <div className="p-4 border-b border-gray-700">
        <h2 className="text-xl font-semibold text-gray-100">Messages</h2>
      </div>

      <div className="flex-1 overflow-y-auto">
        {friends.map(friend => {
          const lastMessage = messageData[friend.id]?.slice(-1)[0];
          return (
            <div
              key={friend.id}
              onClick={() => {selectFriend(friend); setMobileLayout(true);}}
              className={`p-4 border-b border-gray-800 cursor-pointer hover:bg-gray-800 transition-colors ${
                selectedFriend?.id === friend.id ? 'bg-blue-900 border-blue-700' : ''
              }`}
            >
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold">
                    {friend.avatar}
                  </div>
                  {friend.isOnline && (
                    <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium text-gray-100 truncate">{friend.name}</h3>
                    {lastMessage && (
                      <span className="text-xs text-gray-400">{formatTime(lastMessage.timestamp)}</span>
                    )}
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="text-sm text-gray-500 truncate">
                      {lastMessage 
                        ? lastMessage.text
                        : friend.isOnline 
                          ? 'Online' 
                          : `Last seen ${formatLastSeen(friend.lastSeen!)}`
                      }
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FriendList;