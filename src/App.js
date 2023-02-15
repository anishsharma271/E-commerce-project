import Nav from './Components/Nav';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Home from './Components/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Blog from './Components/Blog';
import Login from './Components/auth/Login';
import Sign from './Components/auth/Sign';
import Outfits from './Components/Products/Outfits/Outfits';
import Accessories from './Components/Products/Accessories/Accessories';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/login' element={ <Login/>}/>
        <Route path='/sign' element={ <Sign/>}/>
        <Route path='/accessories' element={ <Accessories/>}/>
        <Route path='/outfits' element={ <Outfits/>}/>
        
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
