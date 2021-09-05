
import './App.css';
import Header from './header/header';
import About from './pages/about/about';
import Home from './pages/homePage/home';
import Services from './pages/services/services';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <About />
      <Services />
    </div>
  );
}

export default App;
