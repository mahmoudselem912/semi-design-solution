
import './App.css';
import Header from './header/header';
import About from './pages/about/about';
import Customers from './pages/customers/customers';
import Home from './pages/homePage/home';
import OurWork from './pages/ourWork/ourWork';
import Services from './pages/services/services';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <About />
      <Services />
      <OurWork />
      <Customers />
    </div>
  );
}

export default App;
