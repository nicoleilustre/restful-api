import React, { useState } from 'react'
import './App.scss'
import { Title } from './components/Title'
import { Prompt } from './components/Prompt';
import { UserInfo } from './components/UserInfo';
import { PersonInfo } from './components/PersonInfo'
import { UserInputForm } from './components/UserInputForm'


interface UserInfoInterface {
  firstName: string,
  lastName: string,
  age: number,
  gender: string
}

function App() {


  const [userInfo, setUserInfo] = useState({} as UserInfoInterface)

  return (
    <div>
      <Title />
      <UserInputForm userInfo={userInfo} setUserInfo={setUserInfo} />
      {!userInfo.firstName ?
        <Prompt /> :
        <div>
          <PersonInfo
            firstName={userInfo.firstName}
            gender={userInfo.gender}
          />
          <UserInfo
            firstName={userInfo.firstName}
            lastName={userInfo.lastName}
            age={userInfo.age}
          />
        </div>}
    </div>
  );
}

export default App;
