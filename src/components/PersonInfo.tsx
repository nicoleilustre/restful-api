import React from 'react'
import { useLayoutEffect, useState } from 'react';
import { getPersonInfo, getPersonInfoWithGender } from '../Api'

interface PersonInfoInterface {
  name: {
    first: string,
    last: string
  },
  dob: { age: number },
  gender: string,
  picture: { medium: string}
}

interface Props {
  firstName: string,
  gender: string
}


export const PersonInfo = (props: Props) => {

  const [personInfo, setPersonInfo] = useState({} as PersonInfoInterface)

  useLayoutEffect(() => {
    if (props.gender === 'no-preference') {
      getPersonInfo()
        .then(personInfo => {
          setPersonInfo(personInfo)
        })
    } else {
      getPersonInfoWithGender(props.gender)
        .then(personInfo => {
          setPersonInfo(personInfo)
        })

    }
  }, [props])

  return (
    <div>
      {personInfo.picture?.medium &&
      <img src={personInfo.picture.medium} alt={personInfo.name.first} />}
      {personInfo.name &&
        <div>Name: {personInfo.name.first} {personInfo.name.last}</div>}
      {personInfo.dob?.age &&
        <div>Age: {personInfo.dob.age}</div>}
      {personInfo.gender &&
        <div>Gender: {personInfo.gender}</div>}
    </div>
  )
}
