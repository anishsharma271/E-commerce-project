import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// import { useState } from "react";
// import { useDispatch } from "react-redux";

const initialState = {
  value: 0,
  user: "",
  loginStatus: false,
  cartItems:[],
  cartQuantity:0,
  cartAmount:0
};
export const userSlice = createSlice({
  // const[signData,setSigndata]=useState(''),

  name: "userrr",
  initialState,
  reducers: {
        
    signStatus: (state, action) => {
      // console.log('sign',state, action.payload);
      const s = action.payload;
      console.log("ss", s);
      // alert(s);
    },
    logoutAction:(state,action)=>{
      // console.log("logout status", {...state,loginStatus: false});
      return {...state,loginStatus: false}
    },
    loginStatus: (state, action) => {
      // console.log("login", { ...state }, action);

      return {
        
        user: action.payload.user,
        msg: action.payload.msg,
        loginStatus: true,
        
      };
    },
    addtocart:(state,action)=>{
      console.log("cart", {state},action);
     
      // state.cartItems.push()
      return{
        cartItems:action.payload
      }
     
    }
   
  },
});

export const signAsync = (values) => async (dispatch) => {
  axios
    .post(`http://localhost:3500/user/signup`, {
      name: values.firstName,
      email: values.email,
      age: values.age,
      password: values.password,
    })
    .then((res) => {
      // console.log("res", res);
      dispatch(signStatus(res.data.msg));
    })
    .catch((err) => {
      console.log("err", err);
    });
};

export const loginAsync = (values) => async (dispatch) => {
  axios
    .post(`http://localhost:3500/user/login`, {
      email: values.email,
      password: values.password,
    })
    .then((res) => {
      if (res) {
        localStorage.setItem("token", res.data.accessToken);
        // console.log("res", res);

        dispatch(loginStatus({ msg: res.data.msg, user: res.data.data }));
        // dispatch( {token:res.data.accessToken})
        //  dispatch(res)
      } else {
      }
    })
    .catch((err) => {
      console.log("err", err);
    });
};

export const {  signStatus, loginStatus,logoutAction,addtocart } =
  userSlice.actions;
export default userSlice.reducer;
