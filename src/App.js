import './App.css';
import Article from './componenets/Article';
import Navbar from './componenets/Navbar';
import Timer from './componenets/Timer';
import McqScreen from './componenets/McqScreen';
import { CogProvider } from './context/CogContext';
import Score from './componenets/Score';

function App() {

  return (
    <>
      <CogProvider>
        <div className="App">
          <Navbar />
          <div className="d-flex justify-content-evenly">
            <Timer/>
          </div> 
          <Article/>
          <McqScreen/>
          <Score/>
        </div>
      </CogProvider>
    </>
  );
}
export default App;
