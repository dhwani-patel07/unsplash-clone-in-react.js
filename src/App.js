import React,{useState}from 'react';
import './App.css';

function App() {
  const[value,setValue] = useState("")
  const[results,setResults] = useState([])
  //IvOAkwwdoAkUm4Fsy0A_JiF5DH7eA6PNaxDnpimtXo
  const fetchImages = ()=>{
    fetch(`https://api.unsplash.com/search/photos?client_id=1IvOAkwwdoAkUm4Fsy0A_JiF5DH7eA6PNaxDnpimtXo&query=${value}&orientation=squarish`)
    .then(res=>res.json())
    .then(data=>{
      console.log(data)
      setResults(data.results)
    })
  }
  return (
    <div className="App">
     <div className="mydiv">
      <span>Search</span>
      <input 
        style={{width:"60%"}}
        type="text" value={value} onChange={(e)=>setValue(e.target.value)}/>
      <button onClick={()=>fetchImages()}>send</button>
    </div>
    <div className="gallery">
      {
        results.map((item)=>{
          return <img className="item" key={item.id} src={item.urls.regular}/>
        })
      }
    </div>
    </div>
  );
}

export default App;
