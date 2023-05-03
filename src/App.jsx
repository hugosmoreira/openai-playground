

function App() {
  

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
            <div id="submit"></div>
          </div>
          <p className="info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum error rem sunt, possimus quos debitis!</p>
        </div>
      </section>
     
    </div>
  )
}

export default App
