import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { TextField } from './TextField'
import { PersonInfo } from './PersonInfo'

export const UserInputForm = () => {

  const onSubmit = () => {
    // console.log(values)

    alert('SUBMITTED!')
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
          .min(1, 'Must be a valid age')
          .required('Required'),
        gender: Yup.string()
          .required('Required')
      })}
      onSubmit={onSubmit}
    >
      {formik => (
        <div>
          <Form>
            <TextField name='firstName' label='First Name' type='text' />
            <TextField name='lastName' label='Last Name' type='text' />
            <TextField name='age' label='Age' type='number' />
            <TextField name='gender' label='Gender' type='text' />
            <button type="submit">Show me a random person</button>
            {formik.values.firstName && <PersonInfo firstName={formik.values.firstName}
              lastName={formik.values.lastName}
              age={formik.values.age}
              gender={formik.values.gender} />}
          </Form>
        </div>
      )}
    </Formik>
  )
}