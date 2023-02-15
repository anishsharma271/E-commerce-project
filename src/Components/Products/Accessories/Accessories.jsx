import React, { useEffect, useState } from "react";

import Card from "./Card";




const Accessories = () => {
 
    const [accessoriesdata,setAccessoriesData]=useState([]);
    const x = "http://localhost:3500/Accessories/productget"

  const getAccessoriesApi=async()=>{

    const res= await fetch(x);
    const data=  await res.json();
    // console.log("accc",data);
    setAccessoriesData(data)
  }
   console.log( 'state',accessoriesdata);

  useEffect(()=>{
    getAccessoriesApi()
  },[x])

  return (
    <div>
      <div className="container">
        <div className="row d-flex justify-content-center align-item-center">
          <div className="col-12">
            <div className="row">
           {
            accessoriesdata.map((e, id)=>{
              return (<Card  key={id} image={e.image} title={e.title} discription={e.discription} price={e.price} rating={e.rating} product={e}/>)
            })
           }
       
          
       

   
            </div>
          </div>
        </div>
      </div>
     
    </div>
  );
};

export default Accessories;
