import React from 'react'

interface PersonInfoInterface { personInfo: {
  name: {
    first: string,
    last: string
  },
  dob: { age: number },
  gender: string,
  picture: { medium: string }
}}


export const PersonInfo = (props: PersonInfoInterface) => {
  return (
    <div>
      {props.personInfo.picture &&
        <img src={props.personInfo.picture.medium} alt={props.personInfo.name.first} />}
      {props.personInfo.name &&
        <div>Name: {props.personInfo.name.first} {props.personInfo.name.last}</div>}
      {props.personInfo.dob.age &&
        <div>Age: {props.personInfo.dob.age}</div>}
      {props.personInfo.gender &&
        <div>Gender: {props.personInfo.gender}</div>}
    </div>
  )
}
