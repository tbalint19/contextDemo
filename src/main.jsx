import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ChatProvider } from './contexts/chatContext'

ReactDOM.createRoot(document.getElementById('root')).render(
    <ChatProvider>
        <App />
    </ChatProvider>
)
