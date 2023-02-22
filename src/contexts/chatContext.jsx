import { createContext, useContext, useState, useEffect } from "react"

const ChatContext = createContext()

const initialState = [ "a", "b", "c", "d", "e"]

const _useMessages = () => {

    const [ loading, setLoading ] = useState(false)
    const [ messages, setMessages ] = useState(initialState)

    const deleteAll = () => setMessages([])

    const loadMessages = () => {
        setLoading(true)
        setMessages([])
        setTimeout(() => {
            setMessages([ "f", "g", "h"])
            setLoading(false)
        }, 3000)
    }

    const msgCount = messages.length
    const hasAny = !!msgCount

    useEffect(() => {
        console.log("init")
    }, [])

    return { messages, loading, deleteAll, loadMessages, msgCount, hasAny }
}

export const ChatProvider = ({ children }) => {

    const contextValue = _useMessages()

    return (
        <ChatContext.Provider value={contextValue}>
            { children }
        </ChatContext.Provider>
    )
}

export const useMessages = () => {
    const context = useContext(ChatContext)
    if (!context) throw "useMessages must be used in the ChatProvider"
    return context
}

