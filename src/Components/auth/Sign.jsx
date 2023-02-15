import React from 'react'
import { useFormik } from 'formik';
import { Schemasign } from './Schema/Validations';
import { NavLink, useNavigate } from "react-router-dom";
import { signAsync } from '../../Redux/userSlice';
import { useDispatch } from 'react-redux';
// import { signStatus } from '../../Redux/userSlice';

const Sign = () => {
  const navigate= useNavigate()
// const [signdata,setSigndata]=useState([])
const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      firstName: '',
      email: '',
      age:'',
      password:'',
      c_password:''
    },
    validationSchema:Schemasign,
    onSubmit: (values) => {
      // console.log('v',values)
      // setSigndata(values)
      // alert(JSON.stringify(values, null, 2));
      // action.resetForm();
      if(values){
        dispatch(signAsync(values));
        navigate('/login')
      }
      
    },
  });
  // console.log('v', signdata)
  return (
    <div className='container-fluid main  py-3 '>
    <div className='conatiner py-2'>
      <div className='row  py-2 d-flex justify-content-center align-item-center'>
        <div className='col-md-6 my-4 py-4 form-col d-flex justify-content-center align-item-center'>
        <form onSubmit={formik.handleSubmit} className="form-group-2">
        <div className='d-flex justify-content-center align-item-center'>
        <h2 htmlFor="firstName" className=' fw-bold'> Name :</h2>
   <input
     id="firstName"
     name="firstName"
     type="text"
     className=' my-2'
     placeholder='Enter Name'
     onChange={formik.handleChange}
     onBlur={formik.handleBlur}
     value={formik.values.firstName}
   />
   {formik.touched.firstName && formik.errors.firstName ? (
     <h6 className='text-danger'>{formik.errors.firstName}</h6>
   ) : null}
        </div>

<div className='d-flex justify-content-center align-item-center my-3'>
<h2 htmlFor="email" className=' fw-bold'>Email Address :</h2>
   <input
     id="email"
     name="email"
     type="email"
     placeholder='Enter e-mail'
     className=' my-2'
     onChange={formik.handleChange}
     onBlur={formik.handleBlur}
     value={formik.values.email}
   />
   <br/>
   {formik.touched.email && formik.errors.email ? (
     <h6 className='text-danger'>{formik.errors.email}</h6>
   ) : null}
</div>
 
   <div className='d-flex justify-content-center align-item-center'>
   <h2 htmlFor="age" className=' fw-bold'>Age :</h2>
   <input
     id="age"
     name="age"
     type="number"
     placeholder='Enter age'
     className=' my-2'
     onChange={formik.handleChange}
     onBlur={formik.handleBlur}
     value={formik.values.age}
   />
   <br/>
   {formik.touched.age && formik.errors.age ? (
     <h6 className='text-danger'>{formik.errors.age}</h6>
   ) : null}
   </div>
  
   <div className='d-flex justify-content-center align-item-center my-3'>
   <h2 htmlFor="password" className=' fw-bold'>Password :</h2>
   <input
     id="password"
     name="password"
     type="password"
     placeholder='Enter password'
     className=' my-2'
     onChange={formik.handleChange}
     onBlur={formik.handleBlur}
     value={formik.values.password}
   />
   <br/>
   {formik.touched.password && formik.errors.password ? (
     <h6 className='text-danger'>{formik.errors.password}</h6>
   ) : null}
   </div>
   
   <div className='d-flex justify-content-center align-item-center'>
   <h2 htmlFor="c_password" className=' fw-bold'> Confirm Password :</h2>
   <input
     id="c_password"
     name="c_password"
     type="c_password"
     placeholder='confirm password'
     className=' my-2'
     onChange={formik.handleChange}
     onBlur={formik.handleBlur}
     value={formik.values.c_password}
   />
   <br/>
   {formik.touched.c_password && formik.errors.c_password ? (
     <h6 className='text-danger'>{formik.errors.c_password}</h6>
   ) : null}

   </div>
    <div className='d-flex justify-content-center align-item-center w-100 my-3'>
    <button type="submit" className='btn btn-danger'>Submit</button>
   
    </div>
    <div className='mx-auto '> <NavLink to='/login'>Existing User? Login</NavLink></div>
   
   
 </form>
        </div>
        <div className='col-md-5'></div>
      </div>
  
 </div>
</div>
  )
}

export default Sign;
