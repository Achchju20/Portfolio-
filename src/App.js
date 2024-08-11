import './App.css';
import About from './page/about';
import Footar from './page/footer';
import Header from './page/header';
import Index from './page/index';
import Pro from './page/project';

function App() {
  return (
    <div className="App">
       <Header/>
       <Index/>
       <About/>
       <Pro/>
       <Footar/>
      
      
    </div>
  );
}

export default App;
