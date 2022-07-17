import './App.css';
import { Footer } from './components/footer/footer';
import { Hero } from './components/hero/hero';
import { Join } from './components/join/join';
import { Plans } from './components/plans/plans';
import { Program } from './components/programs/program';
import { Reasons } from './components/reasons/reasons';
import { Testimonials } from './components/Testimonials/testimonials';
function App() {
  return (
    <div className="App">
          <Hero></Hero>
          <Program></Program>
          <Reasons></Reasons>
          <Plans></Plans>
          <Testimonials></Testimonials>
          <Join></Join>
          <Footer></Footer>
    </div>
  );
}

export default App;
