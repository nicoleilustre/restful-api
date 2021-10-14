import React, { useEffect } from 'react'
import './App.scss'
import { useLayoutEffect, useState } from 'react';
import { getPersonInfo } from './Api'
import { Title } from './components/Title'
import { Loading } from './components/Loading'
import { Prompt } from './components/Prompt';
import { PersonInfo } from './components/PersonInfo'
import { UserInputForm } from './components/UserInputForm'

interface PersonInfoInterface {
  name: {
    first: string,
    last: string
  },
  dob: { age: number },
  gender: string
}
interface UserInfoInterface {
  firstName: string,
  lastName: string,
  age: number,
  gender: string
}

function App() {

  const [personInfo, setPersonInfo] = useState({} as PersonInfoInterface)
  const [userInfo, setUserInfo] = useState({} as UserInfoInterface)

  useLayoutEffect(() => {
    getPersonInfo()
      .then(personInfo => {
        setPersonInfo(personInfo)
      })
  }, [userInfo])

  return (
    <div>
      <Title />
      <UserInputForm userInfo={userInfo} setUserInfo={setUserInfo}/>
      {!userInfo.firstName ?
      <Prompt /> :
      <div>
        <PersonInfo
          firstName={personInfo.name.first}
          lastName={personInfo.name.last}
          age={personInfo.dob.age}
          gender={personInfo.gender}
        /> 
        <PersonInfo
          firstName={userInfo.firstName}
          lastName={userInfo.lastName}
          age={userInfo.age}
          gender={userInfo.gender} />
        </div>}
    </div>
  );
}

export default App;
