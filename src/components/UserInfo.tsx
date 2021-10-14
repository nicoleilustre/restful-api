import React from 'react'


interface UserInfoInterface {
  userInfo: {
    firstName: string,
    lastName: string,
    age: number,
    gender: string
  }
}

export const UserInfo = (props: UserInfoInterface) => {
  return (
    <div>
      Your Information:
      {props.userInfo.firstName &&
        <div>Name: {props.userInfo.firstName} {props.userInfo.lastName}</div>}
      {props.userInfo.age &&
        <div>Age: {props.userInfo.age}</div>}
    </div>
  )

}