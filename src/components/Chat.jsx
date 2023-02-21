import { useState } from "react"

const Chat = ({ messages, deleteAll, loadMessages, loading }) => {

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