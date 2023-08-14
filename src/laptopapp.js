import './laptopapp.css'
import Appbar from './Components/navbar.js'
import Laptops from './Components/laptops/laptops.js'
import Footer from './Components/footer/footer.js'


function LaptopApp() {
  return (
    <div className="LaptopApp">
      <Appbar/>
      <Laptops />
      <Footer/>
    </div>
  );
}

export default LaptopApp;
