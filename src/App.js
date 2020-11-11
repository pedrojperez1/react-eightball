import Eightball from "./Eightball"
import ANSWERS from "./answers"
import './App.css';


function App() {
  return (
    <div className="App">
      <Eightball answers={ANSWERS} />
    </div>
  );
}

export default App;
