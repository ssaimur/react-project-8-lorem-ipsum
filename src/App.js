import React, { useState } from 'react';
import data from './data';
function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    let amount = parseInt(count);
    if (amount <= 0){
      amount = 1;
    } else if(amount > data.length) {
      amount = data.length;
    }
    setText(data.slice(0, amount));
  }
  
  return (
  <section className="section-center">
    <h3>tired of boring lorem ipsum?</h3>
    <form onSubmit={handleSubmit} className="lorem-form">
      <label htmlFor="count">
        paragraphs: 
        <input type="number" name="count" id="count" value={count} onChange={(e)=> setCount(e.target.value)} />
      </label>
      <button type="submit" className="btn">generate</button>
    </form>
    <article>
      <div>{text.map((item, index) => {
        return (
          <p key={index}>{item}</p>
        )
      })}</div>
    </article>
  </section>
  )
}

export default App;
