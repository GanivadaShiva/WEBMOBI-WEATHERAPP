import React,{useState} from 'react'

const App = () => {
  const[city,setCity] = useState("");
  const[result,setResult]= useState("");
  const handleChange = e =>{
    setCity(e.target.value);
  } 
  const handleSubmit = e => {
    e.preventDefault();
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f89c1db8b7510fc47d23dcda0e8beadb`).then(
      response => response.json()
    ).then(data => {
      const kelvin = data.main.temp;
      const celsius = kelvin - 273.15
      setResult("Temparature at"+" "+city+" "+Math.round(celsius)+" "+"celsius")
      setCity("");
    }).catch(err => console.log(err))
  }
  return (
    <div>
      <center>
        <div className="card">
          <div className="card-body">
          <h4 className="card_title">WEBMOBI - WEATHER APP</h4>
          <form onSubmit={handleSubmit}>
            <input type="text" name="city" placeholder="Enter your city"value={city} onChange={handleChange}/><br/><br/>
            <input type="submit" value="Get Temparature"/>
          </form>
          <h1>{result}</h1>
          </div>
        </div>
      </center>
    </div>
  );
}

export default App;
