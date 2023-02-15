import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addtocart } from "../../../Redux/userSlice";

const Card = (props) => {
    
  const dispatch= useDispatch()
     const s= useSelector((s)=>s)
     console.log('ss',s);
  return (
    <>
           <div className="col-md-4 col-10 mx-auto gy-5 ">
            <div className="card" style={{ width: "18rem" }}>
              <img src={props.image} className="card-img-top" alt="..." />
              <div className="card-body">
                <h3>{props.title}</h3>
                <h3>{props.price}</h3>
                <p className="card-text">{props.discription}</p>
                <h6 className=" fs-5"><span className="fw-bolder fs-5">Rating</span>  {props.rating}</h6>
                <button className="btn btn-success" onClick={()=>{dispatch(addtocart(props.product))}}>Add to cart</button>
              </div>
            </div>
            </div>
        
    </>
  );
};

export default Card;
