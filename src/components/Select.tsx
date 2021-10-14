import React from 'react'
import { ErrorMessage, useField} from 'formik'

export const Select = (props: any) => {
  const [field] = useField(props)
  return (
    <div>
      <select {...field}>
      <option value="" disabled selected>Please choose your gender preference</option>
        <option value='female'>Female</option>
        <option value='male'>Male</option>
        <option value='no-preference'>No Preference</option>
      </select>
      <ErrorMessage name={field.name} />
    </div>
  )
}