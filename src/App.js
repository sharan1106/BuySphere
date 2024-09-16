
import './App.css';
import { Navbar } from './components/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { Shop } from './pages/shop';

import Shopcategory from './pages/Shopcategory';
import Product from './pages/Product';
import Cart from './pages/Cart';
import LoginSignup from './pages/LoginSignup';


function App() {
  return (
    <div >
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/Mens' element={<Shopcategory category="Mens"/>}/>
        <Route path='/Womens' element={<Shopcategory category="Womens"/>}/>
        <Route path='/Kids' element={<Shopcategory category="Kids"/>}/>
        <Route path='Product' element={<Product/>}>
          <Route path=':ProductId' element={<Product/>}/>
        </Route>
        <Route path='/Cart' element={<Cart/>}/>
        <Route path='/Login' element={<LoginSignup/>}/>
      </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
