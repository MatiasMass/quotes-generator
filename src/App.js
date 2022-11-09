import {useState, useEffect} from 'react'
import quotesService from './services/quotes'
import './App.css';


function App() {

  const [quotes, setQuotes] = useState([])
  const [quote, setQuote] = useState([])
  useEffect(() => {
    quotesService
      .getAllQuotes()
      .then(initialQuotes =>{
        setQuotes(initialQuotes) 
        setQuote(initialQuotes[0])
      })
  }, [])
  
  const random = () => {
    let ran = Math.floor(Math.random() * quotes.length) 
    // console.log(quotes[ran]);
    setQuote(quotes[ran])
  }

  // console.log(quote);

  return (
    <div className="App">
      <div className="container">
        <p>"{quote.text}"</p>
        {quote.author ? <h4>{quote.author}</h4> : <h4>Without author</h4>}
        <div className="button-container">
          <button onClick={() => random()}>Get Quote</button>
        </div>
      </div>
    </div>
  );

}

export default App;
