import React, { useState } from 'react'
import './App.scss'
import { Title } from './components/Title'
import { Prompt } from './components/Prompt';
import { Loading } from './components/Loading';
import { PersonInfo } from './components/PersonInfo'
import { UserInputForm } from './components/UserInputForm'

export interface PersonInfoInterface {
  name: {
    first: string,
    last: string
  },
  dob: { age: number },
  gender: string,
  picture: { large: string }
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

  return (
    <>
      <Title />
      <UserInputForm setUserInfo={setUserInfo} setPersonInfo={setPersonInfo} />
      {!userInfo.firstName && <Prompt />}
      {!personInfo.name && userInfo.firstName && <Loading />}
      {personInfo.name &&
        <PersonInfo
          personInfo={personInfo}
        />}
    </>
  );
}

export default App;
