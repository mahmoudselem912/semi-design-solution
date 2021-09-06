
import './App.css';
import Footer from './footer/footer';
import Header from './header/header';
import About from './pages/about/about';
import Customers from './pages/customers/customers';
import Home from './pages/homePage/home';
import LatestInfo from './pages/latestInfo/latestInfo';
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
      <LatestInfo />
      <Footer />
    </div>
  );
}

export default App;
