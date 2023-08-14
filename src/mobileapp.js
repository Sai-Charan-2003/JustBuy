import './mobileapp.css'
import Appbar from './Components/navbar.js'
import Mobiles from './Components/mobiles/mobiles.js'
import Footer from './Components/footer/footer.js'


function MobileApp() {
  return (
    <div className="MobileApp">
      <Appbar/>
      <Mobiles/>
      <Footer/>
    </div>
  );
}

export default MobileApp;
