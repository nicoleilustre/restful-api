import React, { useState } from 'react'
import './App.scss'
import { Title } from './components/Title'
import { Prompt } from './components/Prompt';
import { Loading } from './components/Loading';
import { UserInfo } from './components/UserInfo';
import { PersonInfo } from './components/PersonInfo'
import { UserInputForm } from './components/UserInputForm'

interface PersonInfoInterface {
  name: {
    first: string,
    last: string
  },
  dob: { age: number },
  gender: string,
  picture: { medium: string }
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
    <div>
      <Title />
      <UserInputForm setUserInfo={setUserInfo} setPersonInfo={setPersonInfo} />
      {!userInfo.firstName && <Prompt />}
      {!personInfo.name && userInfo.firstName && <Loading />}
      {personInfo.name &&
        <div>
          <PersonInfo
            personInfo={personInfo}
          />
          <UserInfo
            userInfo={userInfo}
          />
        </div>}
    </div>
  );
}

export default App;
