import { useState, useEffect } from 'react';
import './style/App.css'
import Header from './components/Header';
import Form from './components/Form';
import ErrorPage from './components/ErrorPage';


const App = () =>  {
  const [ userData, setUserData ] = useState({
    id: 0,
    name: '',
    surname: '',
    email: '',
    phone: '',
    age: '',
    loan_amount: '',
    loan_date:'' ,
    loan_weeks: '',
    check: 0
  })
  const [ error, setError ] = useState(null)
  const id= 2;

  useEffect(() =>{
    fetch (`https://api7.cloudframework.io/recruitment/fullstack/users?id=${id}`)
      .then(response => response.ok 
        ? response.json()
        : setError(`Status: ${response.status}`))
      .then(data=> setUserData(data.data))
  }, [id])

  
  return (
    <>
      <Header />
      <main className='main__container'>
        { !error
          ? <Form userData={userData} setUserData={setUserData} setError={setError} />
          : <ErrorPage error ={error} />
        }
      </main>
    </>
  )
}

export default App
