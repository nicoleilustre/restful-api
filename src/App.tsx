import React from 'react'
import './App.scss'
import { useLayoutEffect, useState } from 'react';
import { getPersonInfo } from './Api'
import { Title } from './components/Title'
import { Loading } from './components/Loading'
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

function App() {


  const [personInfo, setPersonInfo] = useState({} as PersonInfoInterface)

  useLayoutEffect(() => {
    getPersonInfo()
      .then(personInfo => {
        setPersonInfo(personInfo)
      })
  }, [])

  return (
    <div>
      <Title />
      <UserInputForm />
      {!personInfo.name ?
        <Loading /> :
        <PersonInfo
          firstName={personInfo.name.first}
          lastName={personInfo.name.last}
          age={personInfo.dob.age}
          gender={personInfo.gender}
        />}
    </div>
  );
}

export default App;
