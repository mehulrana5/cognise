import './App.css';
import Article from './componenets/Article';
import Navbar from './componenets/Navbar';
import Timer from './componenets/Timer';
import McqScreen from './componenets/McqScreen';
import { CogProvider } from './context/CogContext';
import Score from './componenets/Score';
import AddArticle from './componenets/AddArticle';

function App() {

  return (
    <>
      <CogProvider>
        <div className="App">
          <Navbar />
          <Timer />
          <Article />
          <McqScreen />
          <Score />
          <AddArticle />
        </div>
      </CogProvider>
    </>
  );
}
export default App;
