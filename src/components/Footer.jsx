import { useMessages } from "../contexts/chatContext"

const Footer = () => {

    const {
        msgCount,
      } = useMessages()

    return (
        <div>
            Footer ({ msgCount })
        </div>
    )
}

export default Footer