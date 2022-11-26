import { useState } from "react"
import { initialMessages } from "./Assets/initialMessages"
import Footer from "./Components/Footer/Footer"
import Header from "./Components/Header/Header"
import Main from "./Components/Main/Main"
import { AppContainer } from "./GlobalStyle"

function App() {

  const [currSender, setCurrSender] = useState("Me")

  const [senders, setSenders] = useState([
    "Me",
    "Harry",
    "Louis",
    "Zayn",
    "Niall",
    "Liam"
])

const [messages, setMessages] = useState(initialMessages)


const onChangeSender = (e) => {
    setCurrSender(e.target.value)
}

const deleteMessage = (idToDelete) => {
  if (window.confirm("Are you sure you want to delete this message?")) {
      const newMessages = [...messages] 
      const indexToDelete = newMessages.findIndex(
          (message) => message.id === idToDelete 
      )

      if (indexToDelete > -1) { 
          newMessages.splice(indexToDelete, 1)
          setMessages(newMessages)
      }
  }
}

const sendMessage = (text) => {
  const newMessage = {
      id: `${currSender}-${Math.ceil(Math.random() * 100000)}`,
      sender: currSender,
      content: text,
      createdAt: new Date()
          .toLocaleTimeString(
              "en-US",
              {
                  hour: "numeric",
                  minute: "numeric",
                  hour12: true
              }
          ) 
  }

  const newMessages = [...messages, newMessage]
  setMessages(newMessages)
}

return (
  <AppContainer>
      <Header
          senders={senders}
          currSender={currSender}
          onChangeSender={onChangeSender}
      />

      <Main messages={messages} deleteMessage={deleteMessage} />

      <Footer sendMessage={sendMessage} />
  </AppContainer>
)
}


export default App;
