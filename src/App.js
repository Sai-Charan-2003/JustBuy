import Appbar from './Components/navbar.js'
import Mobiles from './Components/mobiles/mobiles.js'
import Laptops from './Components/laptops/laptops.js'
import Footer from './Components/footer/footer.js'
import './App.css';

function App() {
  return (
    <div className="App">
      <Appbar/>
      <Mobiles/>
      <Laptops/>
      <Footer/>
    </div>
  );
}

export default App;
