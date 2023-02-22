import { useMessages } from "../contexts/chatContext"

const Chat = () => {

    const {
        loading,
        messages,
        deleteAll,
        loadMessages,
      } = useMessages()

    return (
        <div>
            <button onClick={deleteAll}>Delete</button>
            <button onClick={loadMessages}>Load</button>
            {loading ? "Loading..." : messages.map(m => (
                <p>{m}</p>
            ))}
        </div>
    )
}

export default Chat