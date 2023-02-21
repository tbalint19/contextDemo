import { useState } from 'react'
import './App.css'
import Chat from './components/Chat'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import { notAHook } from './hooks/useMessages'

function App() {

  const {
    loading,
    messages,
    deleteAll,
    loadMessages,
    hasAny,
    msgCount
  } = notAHook()

  return (
    <div className="App">
      <Navbar hasAny={hasAny} />
      <Chat
        messages={messages}
        deleteAll={deleteAll}
        loading={loading}
        loadMessages={loadMessages} />
      <Footer msgCount={msgCount} />
    </div>
  )
}

export default App
