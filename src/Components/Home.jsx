import React, {  useState } from 'react'
import { useSelector } from 'react-redux'
// import { NavLink } from 'react-router-dom'
// import banner from '../Images/banner.jpg';
import Carousel from 'react-bootstrap/Carousel';
import './Style.css'
// import { loginStatus } from '../Redux/userSlice'
import first from '../Images/fourth.jpg'
import second from '../Images/second.jpg'
import third from '../Images/third.jpg'
import Alert from 'react-bootstrap/Alert';
import { NavLink } from 'react-router-dom';
// import Model from './Model';


const Home = () => {
  const [alertMsg, setAlertMsg] = useState(true)
  const selector= useSelector((s)=>s)
  // const val = selector((userSlice)=>userSlice)
  // console.log('ss',selector);

  
  


    const Alertfuc=(msg)=>{
      setTimeout(() => {
        setAlertMsg(false)
      }, 3500);
      return <Alert>{msg}</Alert>
    }
   
   
  return (
   <>
   {/* {  ? (''):(<Model  modelContent={selector.userSlice.msg}/>)} */}
   { selector.userSlice.loginStatus && alertMsg ?Alertfuc(selector.userSlice.msg):""}

    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100 img-home  " 
          src={first}
          alt="First slide"
          
        />
        <Carousel.Caption>
        <h2 className='fw-bold fs-1'>SPORTS CLUB</h2>
         <button className='btn btn-danger'>Shop Now➡</button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 img-home "
          src={second}
          alt="Second slide"
        />

        <Carousel.Caption>
        <h2 className='fw-bold fs-1'>SPORTS CLUB</h2>
         <button className='btn btn-danger'>Shop Now➡</button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 img-home "
          src={third}
          alt="Third slide"
        />

        <Carousel.Caption>
        <h2 className='fw-bold fs-1'>SPORTS CLUB</h2>
         <button className='btn btn-danger'>Shop Now➡</button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <div className='container-fluid bg-dark  '>
    
      <div className='row d-flex justify-content-center align-item-center px-3  py-3'>
        
        <div className='col-md-6 collection-one '>
        <NavLink to='outfits' >
          <h2 className='bg-light text-dark '>Click Here</h2>
          </NavLink>
        </div>
       
       
        <div className='col-md-6 collection-two'>
          <NavLink to='/accessories'>
        <h2 className='bg-light text-dark'>Click Here</h2>
        </NavLink>
        </div>
      </div>
    
    </div>

    </>
   
  )
}

export default Home
