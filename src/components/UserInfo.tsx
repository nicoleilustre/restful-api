import React from 'react'


  interface Props {
  firstName: string,
  lastName: string,
  age: number,
}

export const UserInfo = (props: Props) => {
  return (
    <div>
      {props.firstName &&
        <div>Name: {props.firstName} {props.lastName}</div>}
      {props.age &&
        <div>Age: {props.age}</div>}
    </div>
  )

}