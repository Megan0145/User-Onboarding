import React, { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

export default function FormContainer() {
  return (
    <Formik
      //props
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
