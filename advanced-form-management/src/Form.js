import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from 'yup';

const validationSchema = yup.object().shape(
    {
        name: yup.string().required('You must provide a name'),
        email: yup.string().email('email not valid').required('You must provide an email'),
        password: yup.string().min(10, 'Password must be 10+ characters').required('Password is required'),
        tos: yup.boolean().test(value =>value === true).required('dfdsf')
    }
);

const initialFormValues = {
    name: '',
    email: '',
    password: '',
    tos: false
}

export default function FormContainer(props) {
    //props
  return (
    <Formik
      //props
      validationSchema={validationSchema}
      initialValues={initialFormValues}
      onSubmit={props.onSubmit}
      render={props => {
        return (
          <Form>
              <h1>Sign Up</h1>
            <div className='formRow'>
              <label>
                Name:
                <Field name="name" type="text" />
                <ErrorMessage name='name' component='div' />
              </label>
            </div>
            <div className='formRow'>
              <label>
                Email:
                <Field name="email" type="email" />
                <ErrorMessage name='email' component='div' />
              </label>
            </div>
            <div className='formRow'>
            <label>
                Password:
                <Field name="password" type="password" />
                <ErrorMessage name='password' component='div' />
              </label>
            </div>
            <div>
            <label>
                Please Agree to Terms Of Service 
                <Field name="tos" type="checkbox" checked={props.values.tos}/>
                <ErrorMessage name='tos' component='div' />
              </label>
            </div>
            <button type="submit">Submit</button>
          </Form>
        );
      }}
    />
  );
}
