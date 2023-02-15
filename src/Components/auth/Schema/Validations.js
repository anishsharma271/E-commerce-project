import * as Yup from 'yup';


export const loginValidation=Yup.object({
    email: Yup.string().email("Invalid email address").required("Invalid E-mail"),
    password: Yup.string().min(6).required("Invalid Password")
  })

  export const Schemasign= Yup.object({
    firstName: Yup.string()
      .max(15, 'Must be 15 characters or less')
      .required('please enter first name'),
    email: Yup.string().email('Invalid email address')
    .required('please enter valid email'),
    age: Yup.number().required('Must be Number'),
    password: Yup.string().min(6).required('Must be 6 characters or more'),
    c_password:Yup.string().min(6).oneOf([Yup.ref('password'),null],'password mismatch'),

  })