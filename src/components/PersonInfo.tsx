import React from 'react'

interface Props {
  firstName: string;
  lastName: string;
  age: number;
  gender: string
}

export const PersonInfo = (props: Props) => {
  return (
    <div>
      {props.firstName &&
        <div>Name: {props.firstName} {props.lastName}</div>}
      {props.age &&
        <div>Age: {props.age}</div>}
      {props.gender &&
        <div>Gender: {props.gender}</div>}
    </div>
  )
}
