import './App.css'
import Chat from './components/Chat'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import { useInput } from './hooks/useInput'
import { useMessages } from './contexts/chatContext'

function App() {

  const {
    msgCount
  } = useMessages()

  const usernameInput = useInput()
  const passwordInput = useInput()

  const save = () => {
    console.log(usernameInput.value)
    console.log(passwordInput.value)
    // http post
  }

  return (
    <div className="App">
      <h1>{msgCount}</h1>
      <input type="username" {...usernameInput} />
      <input type="password" {...passwordInput} />
      <button onClick={save}>Save</button>
      <Navbar />
      <Chat />
      <Footer />
    </div>
  )
}

export default App
