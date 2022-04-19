import React, { useState } from 'react';
import SuccessPage from './SuccessPage';
import '../style/Form.css';


const Form = ({userData, setUserData, setError}) => {
    const [ postResponse, setPostResponse ]= useState({
        id: 0,
        name: '',
        surname: '',
        email: '',
        phone: '',
        age: '',
        loan_amount: '',
        loan_date:'' 
    })
    const [haveAnswer, setHaveAnswer ] = useState(false);

    const handleInputChange= (e) =>{
        const name = e.target.name;
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        setUserData({
          ...userData,
          [name] : value
        })
    }

    const getSuccess=(data)=>{
        const successData= data.data
        setPostResponse({...successData})
        return setHaveAnswer(true)
    }

    const handleSubmit =(e) =>{
        e.preventDefault();
        let id = userData.id
        let newAge= userData.age.toString()
        let newData= {...userData, age:newAge}
        const requestOptions ={
          method: 'POST',
          headers: {'Content-Type': 'application/json','X-WEB-KEY': 'Development'},
          body: JSON.stringify(newData)
        };
        fetch(`https://api7.cloudframework.io/recruitment/fullstack/users/${id}`, requestOptions)
        .then(response => response.ok 
          ? response.json()
          : setError(`Error status ${response.status}`))
        .then(data=> 
            getSuccess(data))
        .catch(error => (
          console.log(`error al guardar los datos ${error}`)
        ))
    }
    

    return (
        <>
            { !haveAnswer 
               ? <article className='article__Form--container'>
                    <form className='main__form--container' onSubmit={handleSubmit}>
                        <div className='form__input--container'>
                        <label htmlFor='name'>Nombre</label>
                        <input 
                            id='name' 
                            type='text' 
                            name='name' 
                            value={userData.name} 
                            onChange={handleInputChange}
                            className='form__input' 
                            readOnly
                        />
                        </div>
                        <div className='form__input--container'>
                        <label htmlFor='surname'>Apellidos</label>
                        <input 
                            id='surname' 
                            type='text' 
                            name='surname' 
                            value={userData.surname} 
                            className='form__input' 
                            onChange={handleInputChange}
                            readOnly
                        />
                        </div>
                        <div className='form__input--container'>
                        <label htmlFor='email'>Email</label>
                        <input 
                            id='email' 
                            type='email' 
                            name='email' 
                            value={userData.email} 
                            className='form__input' 
                            onChange={handleInputChange}
                            readOnly
                        />
                        </div>
                        <div className='input__short--container'>
                        <div className='form__input--container'>
                            <label htmlFor='phone'>Teléfono</label>
                            <input 
                            id='phone' 
                            type='tel' 
                            name='phone' 
                            value={userData.phone} 
                            className='form__input short' 
                            onChange={handleInputChange}
                            required
                            />
                        </div>
                        <div className='form__input--container'>
                            <label htmlFor='age'>Edad</label>
                            <input 
                            id='age' 
                            type='number' 
                            name='age' 
                            value={userData.age} 
                            step="1"
                            className='form__input short' 
                            onChange={handleInputChange}
                            required
                        /> 
                        </div>
                        </div>
                        <div className='form__input--container'>
                        <label htmlFor='loan_amount'>Importe del préstamo, en €</label>
                        <input 
                            id='loan_amount' 
                            type='number' 
                            name='loan_amount' 
                            value={userData.loan_amount}
                            min='10'
                            max='1000'
                            className='form__input' 
                            onChange={handleInputChange}
                            required
                        />
                        </div>
                        <div className='form__input--container'>
                        <label htmlFor='loan_date'>Fecha a conseguir el préstamo</label>
                        <input 
                            id='loan_date' 
                            type='date' 
                            name='loan_date'
                            value={userData.loan_date}
                            min='2022-04-05'
                            className='form__input'
                            onChange={handleInputChange}
                        />
                        </div>
                        <div className='form__input--container'>
                        <label htmlFor='loan_weeks'>Tiempo a devolver el préstamo, en años</label>
                        <input 
                            id='loan_weeks' 
                            type='number' 
                            name='loan_weeks' 
                            value={userData.loan_weeks}
                            min='1'
                            max='20'
                            className='form__input' 
                            onChange={handleInputChange}
                            required
                        />
                        </div>
                        <div className='input__check--container'>
                        <input 
                            id='check' 
                            type='checkbox'
                            name='check' 
                            checked={userData.check}
                            className='form__input--checkout' 
                            onChange={handleInputChange}
                            required
                        />
                        <label htmlFor='check'>Acepto los 
                            <a href='https://cloudframework.io/terminos-y-condiciones/' target='_blank' rel="noreferrer" className='form__link--checkout'>
                            términos y condiciones
                            </a>
                        </label>
                        </div>
                        <input type='submit' value='Enviar solicitud' className='main__form--button'/>
                    </form>
                </article>
                : <SuccessPage postResponse={postResponse}/>
            }
        </>
    )
}

export default Form;
