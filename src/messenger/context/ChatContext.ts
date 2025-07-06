import React from 'react';
import { ChatContextType } from '../util/type';

const ChatContext = React.createContext<ChatContextType | undefined>(undefined);

export default ChatContext;