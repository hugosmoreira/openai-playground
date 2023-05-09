

function App() {

  const getMessages = async () => {
    // eslint-disable-next-line no-empty
    const options = {
      method: 'POST',
      body: JSON.stringify({
        model: 'gpt-4',
        message: 'Hello, how are you?',
        max_tokens: 150,
      }),
    }
    try {
      const response = await fetch('http://localhost:8000/completions', options)
      // eslint-disable-next-line no-undef, no-unused-vars
      const data = response.json()
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }
  

  return (
    <div className='app'>
      <section className='side-bar'>
        <button className='button'>+ New Chat</button>
        <ul className='history'></ul>
        <nav>
          <p>Hugosmr</p>
        </nav>
      </section>
      <section className='main'>
        <h1>Hugo-GPT</h1>
        <ul className="feed">

        </ul>
        <div className="bottom-section">
          <div className="input-container">
            <input type="text" />
            <div id="submit" onClick={getMessages}>CK</div>
          </div>
          <p className="info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum error rem sunt, possimus quos debitis!</p>
        </div>
      </section>
     
    </div>
  )
}

export default App
