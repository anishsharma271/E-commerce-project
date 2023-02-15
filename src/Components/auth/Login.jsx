import React from "react";
import { useFormik } from "formik";
import { loginValidation } from "./Schema/Validations";
// import  images  from '../Images/images.jpg'
import { loginAsync } from "../../Redux/userSlice";
import '../Style.css'
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const Login = () => {
  const dispatch= useDispatch()
  const navigate= useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      password:'',
    },
    validationSchema: loginValidation,
    onSubmit: (values,action) => {
      // alert(JSON.stringify(values, null, 2));
      // action.resetForm();
      if(values){
        dispatch(loginAsync(values));
        navigate('/')
      } else{

      }
      
    },
  });
  return (
    <div className="container-fluid login-img py-5">
      <div className="container py-5 d-flex justify-content-center align-item-center">
        
            <form onSubmit={formik.handleSubmit} className=" py-4 mt-4 form-group ">
              <h4 htmlFor="email">Email Address</h4>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Enter e-mail"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
              {formik.touched.email && formik.errors.email ? (
                <p className="text-danger">{formik.errors.email}</p>
              ) : null}
              <h4 htmlFor="password">Password</h4>
              <input
                id="password"
                name="password"
                type="password"
                placeholder="Enter Password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
              /><br/>
              {formik.touched.password && formik.errors.password ? (
                <p className="text-danger">{formik.errors.password}</p>
              ) : null}

              <button className="btn btn-danger my-4" type="submit">Submit</button><br/>
              <NavLink to='/sign'> New to A&S? Create an Account</NavLink>
            </form>
           
        
      </div>
    </div>
  );
};

export default Login;
