export interface Message {
  id: number;
  text: string;
  timestamp: Date;
  sender: 'user' | 'friend';
}

export interface Friend {
  id: number;
  name: string;
  avatar: string;
  isOnline: boolean;
  lastSeen?: Date;
}

export interface ChatData {
  [friendId: number]: Message[];
}

export interface ChatContextType {
  friends: Friend[];
  messageData: ChatData;
  mobileLayout: boolean;
  selectedFriend: Friend | null;
  selectFriend: (friend: Friend) => void;
  sendMessage: (text: string) => void;
  setMobileLayout: (value: boolean) => void;
}

export type ChatContextTypeOrNull = ChatContextType | null;