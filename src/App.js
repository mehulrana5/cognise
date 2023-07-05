import './App.css';
import { useState } from 'react';
import Article from './componenets/Article';
import Modes from './componenets/Modes';
import Navbar from './componenets/Navbar';
import Timer from './componenets/Timer';
import McqScreen from './componenets/McqScreen';

function App() {
  const [mode, setMode] = useState('easy');
  const [Active, setActive] = useState(0);
  const [timeup,settimeup]=useState(1);

  function updateStatus(newmode,newactive,newTimeUp){
    setMode(newmode);
    setActive(newactive);
    settimeup(newTimeUp);
  } 
  function updateTimeUp(newTimeUp){
    settimeup(newTimeUp);
  }

  return (
    <div className="App">
      <Navbar />
      <div className="d-flex justify-content-evenly"> 
        <Modes updateStatus={updateStatus}/>
        <Timer mode={mode} isActive={Active} updateStatus={updateStatus} updateTimeUp={updateTimeUp}/> 
      </div> 
      <Article isActive={Active}/>
      <McqScreen timeup={timeup}/>
    </div>
  );
}
export default App;
