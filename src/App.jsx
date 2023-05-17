/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react'




function App() {

  const [inputValue, setInputValue] = useState('')
  // eslint-disable-next-line no-unused-vars
  const [message, setMessage] = useState(null)
  const [ previousChats, setPreviousChats ] = useState([])
  const [ currentTitle, setCurrentTitle ] = useState(null)


  const createNewChat = () => {
    setMessage(null)
    setInputValue("")
    setCurrentTitle(null)
  }


  const handleClick = (uniqueTitle) => {
    setCurrentTitle(uniqueTitle)
    setMessage(null)
    setInputValue("")
  }

  const getMessages = async () => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', // Add the 'Content-Type' header
      },
      body: JSON.stringify({
        message: inputValue,
      }),
    }
    try {
      const response = await fetch('http://localhost:8000/completions', options)
      const data = await response.json()
  
      console.log('Data:', data)
      console.log('Message:', data.choices[0].message);
  
      // setMessage(data.choices[0].text)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => { 
    console.log(currentTitle, inputValue, message)
    if (!currentTitle && inputValue && message) {
      setCurrentTitle(inputValue)
    }
    if (currentTitle && inputValue && message) {
        setPreviousChats(prevChats => (
          [...prevChats, 
            {
            title: currentTitle,
            role: 'user',
            content: inputValue   
          },
          {
            title: currentTitle,
            role: message.role,
            content: message.content
          }
        
        
        ]
        ))
    }
  }, [message, currentTitle])

  console.log(previousChats)

  const currentChat = previousChats.filter(previousChats => previousChats.title === currentTitle)
  const uniqueTitles = Array.from(new Set(previousChats.map(previousChats => previousChats.title)))
  console.log(uniqueTitles)





  
  

  return (
    <div className='app'>
      <section className='side-bar'>
        <button className='button' onClick={createNewChat}>+ New Chat</button>
        <ul className='history'>
          {uniqueTitles.map((uniqueTitle, index) => <li key={index} onClick={() => handleClick(uniqueTitle)}>{uniqueTitle}</li>)}
        </ul>
        <nav>
          <p>Hugosmr</p>
        </nav>
      </section>
      <section className='main'>
        {! currentTitle && <h1>Hugo-GPT</h1>}
        <ul className="feed">
          {currentChat?.map((chatMessage, index) => <li key={index}>
            <p className='role'>{chatMessage.role}</p>
            <p>{chatMessage.content}</p>
          </li>) }
        </ul>
        <div className="bottom-section">
          <div className="input-container">
          <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
/>
            <div id="submit" onClick={getMessages}>CK</div>
          </div>
          <p className="info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum error rem sunt, possimus quos debitis!</p>
        </div>
      </section>
     
    </div>
  )
}

export default App
