import './App.css';
import {useEffect,useState} from "react";

    const DEFAULT_WEIGHT = 50;
    const DEFAULT_HEIGHT = 150;

function App() {
  const[weight,setWeight]=useState(DEFAULT_WEIGHT);
  const[height,setHeight]=useState(DEFAULT_HEIGHT);
  const [bmiResult, setBmiResult] = useState(null);

  function onHeightChange(event){
    const inputHeight= event.target.value;
    setHeight(inputHeight);
  } 
  function onWeightChange(event){
    const inputWeight= event.target.value;
    setWeight(inputWeight);
  }
  function calcBMI(){
    const convheight = height / 100;
    const bmi = weight / (convheight * convheight);
    setBmiResult(bmi);
  }
  useEffect(() => {
    calcBMI();
  });
  return (
    <div>
      <h1>BMI CALCULATOR</h1>
      <div className="maindiv">
      <p>Weight: {weight} kg</p>
        <input
          onChange={onWeightChange}
          type="range"
          step="1"
          min="40"
          max="220"
        />
        <p>Height: {height} cm</p>
        <input
          onChange={onHeightChange}
          type="range"
          min="140"
          max="220"
        />
      <div className="resultdiv">
      <p>Your BMI IS: </p>
      <p className="result">{bmiResult !== null ? bmiResult.toFixed(2) : ""}</p> 
      </div>
    </div>
    </div>
  );
}

export default App;
