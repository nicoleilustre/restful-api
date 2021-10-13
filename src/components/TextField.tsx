import React from 'react'
import { ErrorMessage, useField } from 'formik'


export const TextField = (props: any) => {
    const [field] = useField(props)
    return (
        <div>
            <label htmlFor={field.name}>{props.label}</label>
            <input type="text" {...field} {...props}/>
            <ErrorMessage name={field.name} />
            
        </div>
    )
}