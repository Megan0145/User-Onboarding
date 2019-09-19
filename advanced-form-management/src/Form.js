import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from 'yup';

const validationSchema = yup.object().shape(
    {
        name: yup.string().required('You must provide a name'),
        email: yup.string().email('email not valid').required('You must provide an email'),
        password: yup.string().min(10, 'Password must be 10+ characters').required('Password is required')
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
      onSubmit={props.onSubmit}
      validationSchema={validationSchema}
      initialValues={initialFormValues}
      render={props => {
        return (
          <Form>
            <div>
              <label>
                Name:
                <Field name="name" type="text" />
              </label>
            </div>
            <div>
              <label>
                Email:
                <Field name="email" type="email" />
              </label>
            </div>
            <div>
            <label>
                Password:
                <Field name="password" type="password" />
              </label>
            </div>
            <div>
            <label>
                Agree to TOS:
                <Field name="tos" type="checkbox" />
              </label>
            </div>
            <button type="submit">Submit</button>
          </Form>
        );
      }}
    />
  );
}
