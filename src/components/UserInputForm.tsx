import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { TextField } from './TextField'
import { Select } from './Select'

export const UserInputForm = ({ setUserInfo }: any) => {

  const onSubmit = (values: any) => {
    setUserInfo(values)
  }

  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        age: 0,
        gender: ''
      }}
      validationSchema={Yup.object({
        firstName: Yup.string()
          .max(20, 'Must be 20 characters or less')
          .required('Required'),
        lastName: Yup.string()
          .max(20, 'Must be 20 characters or less')
          .required('Required'),
        age: Yup.number()
          .min(1, 'Must be a valage')
          .required('Required'),
        gender: Yup.string()
          .required('Required')
      })}
      onSubmit={values => onSubmit(values)}
    >
      {formik => (
        <div>
          <Form>
            <TextField
              name='firstName'
              label='First Name'
              type='text' />
            <TextField
              name='lastName'
              label='Last Name'
              type='text' />
            <TextField
              name='age'
              label='Age'
              type='number' />
            <Select
              name='gender'
              value='values.gender' />
            <button type="submit">Show me the love of my life</button>
          </Form>
        </div>
      )}
    </Formik>
  )
}