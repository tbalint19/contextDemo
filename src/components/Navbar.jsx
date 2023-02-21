import { useEffect } from "react"

const Navbar = ({ hasAny }) => {


    return (
        <div>
            Navbar { hasAny && "(You have some messages)"}
        </div>
    )
}

export default Navbar