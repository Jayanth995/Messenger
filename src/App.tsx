
import React from 'react'
import './App.css'
import ChatProvider from './messenger/context/ChatProvider'
import Messenger from './messenger/components/Messenger/Messenger'

const App: React.FC = () => {
  return (
    <ChatProvider>
      <Messenger />
    </ChatProvider>
  )
}

export default App
