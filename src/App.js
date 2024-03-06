import { useState } from "react";

function App() {
  //  making use state og our application

  const [weight, setweight] = useState(0);
  const [height, setheight] = useState(0);
  const [bmi, setbmi] = useState("");
  const [message, setmessage] = useState("");


  // logic bilding 

  let BMIcal = (e) => {

    e.preventDefault()

    if(weight===0 || height === 0){
      alert("Please Enter Valid value");
    }

    else{
      let bmi = weight/(height*height*100);
      setbmi(bmi.toFixed(1))
      if(bmi < 25){
        setmessage("Your weight is under the Fitness Line");
      }
      else if(bmi >= 25 && bmi < 30){
        setmessage("Your health is good");
      }
      else{
        setmessage("Your weight is over the Fitness Line");
      }
    }
  }


  // Reset logic

  let reset = () => {
    window.location.reload();
  }

  return (
    <div className="App">
      <div className="container">
      <h1>BMI Calculator</h1>
        <form onSubmit={BMIcal}>
          {/* <h1>BMI Calculator</h1> */}
          <div>
            <label>Weight (kg)</label>
            <input type="text" placeholder="Enter Your Weight" value={weight} onChange={(e) => setweight(e.target.value)}/>
          </div>
          <div>
            <label>Height (cm)</label>
            <input type="text" placeholder="Enter your height" value={height} onChange={(event) => setheight(event.target.value)}/>
          </div>
          <div>
            <button className="btn" type="submit">
              Submit
            </button>
            <button className='btn btn-outline' onClick={reset} type="submit">
              Reset
            </button>
          </div>
          <div className="center">
            <h3>Your BMI is : {bmi}</h3>
            <p>{message}</p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
