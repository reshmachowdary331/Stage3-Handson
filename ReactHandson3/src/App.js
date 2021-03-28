import logo from './logo.svg';
import './App.css';
import {CalculateScore} from '../src/Components/CalculateScore';

function App() {
  return (
    <div className="App">
      <CalculateScore Name={"Reshma"} School={"Raghava high School"}
       total={490}
       goal={6}/>
    </div>
  );
}

export default App;
