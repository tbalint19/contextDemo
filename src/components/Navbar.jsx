import { useEffect } from "react"
import { useMessages } from "../contexts/chatContext"

const Navbar = () => {

    const {
        hasAny,
      } = useMessages()


    return (
        <div>
            Navbar { hasAny && "(You have some messages)"}
        </div>
    )
}

export default Navbar