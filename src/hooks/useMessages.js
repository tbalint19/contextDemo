import { useState } from "react"

const initialState = [ "a", "b", "c", "d", "e"]

export const useMessages = () => {

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
    const hasAny= !!msgCount

    return { messages, loading, deleteAll, loadMessages, msgCount, hasAny }
}


export const notAHook = () => {

    let loading = false
    let messages = initialState

    const deleteAll = () => {
        console.log(messages)
        console.log("runs")
        messages = []
        console.log(messages)
    }

    const loadMessages = () => {
        loading = true
        messages = [ ]
        setTimeout(() => {
            messages = [ "f", "g", "h"]
            loading = false
        }, 3000)
    }

    const msgCount = messages.length
    const hasAny= !!msgCount

    return { messages, loading, deleteAll, loadMessages, msgCount, hasAny }
}


