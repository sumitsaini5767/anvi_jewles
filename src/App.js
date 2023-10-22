import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Homepage from './components/Homepage';
import Contactus from './components/Contactus';
import Gallery from './components/Gallery';
import Shoppage from './components/Shoppage';
import RingCollection from './components/Ring_collection';
import Aboutus from './components/Aboutus';
import MyAdmin from './pages/Admin/index';
import Forget from './pages/Admin/forget';
import Dashboards from './pages/Admin/dashboard';
import Bill from './components/MyAccount/Dashboard/AddressForm/bill';
import AboutPage from './pages/About/About';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
   <Router>
    <Header />
    <Navbar/>
    <Routes>
      <Route path="/" element={<Homepage/>}></Route>
      <Route path="aboutus" element={<Aboutus />}></Route>
      <Route path="myaccount" element={<MyAdmin />}></Route>
      <Route path="Forget_Password" element={<Forget />}></Route>
      <Route path="Dashboard" element={<Dashboards />}></Route>
      <Route path='Bill Address' element={<Bill/>}></Route>
      <Route path='about' element={<AboutPage />}></Route>
      <Route path="/contact" element={<Contactus/>}></Route>
      <Route path="/gallery" element={<Gallery/>}></Route>
      <Route path="/shop" element={<Shoppage/>}></Route>
      <Route path='/ring_collection' element={<RingCollection/>}></Route>
    </Routes>
    <Footer/>
    </Router>
  </>
  );
}

export default App;
