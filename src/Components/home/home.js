import './home.css'
import Navbar from '../navbar.js'
import Footer from '../footer/footer.js'
import logo from './just-buy-logo.png'

function Home(){
    return (
    <div className="Home">
      <header className="Home-header">
        <>
          <Navbar />
          <img src={logo}  className='fit' alt = ''/>
        </>
      </header>
      <Footer />
    </div>
  );
}

export default Home;