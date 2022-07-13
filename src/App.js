import './App.css';
import { Hero } from './components/hero/hero';
import { Program } from './components/programs/program';
import { Reasons } from './components/reasons/reasons';
function App() {
  return (
    <div className="App">
          <Hero></Hero>
          <Program></Program>
          <Reasons></Reasons>
    </div>
  );
}

export default App;
