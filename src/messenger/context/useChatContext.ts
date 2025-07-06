import { useContext } from 'react';
import ChatContext from './ChatContext';
import { ChatContextType } from '../util/type';

export const useChatContext = (): ChatContextType => {
  const context = useContext(ChatContext) as ChatContextType;
//   if (context === undefined) {
//     throw new Error('Chat context unavailable!');
//   }
  return context;
};