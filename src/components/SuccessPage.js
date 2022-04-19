import React from 'react';
import '../style/SuccessPage.css';

const SuccessPage = (postResponse)=>{
    const {name, surname, age, email,phone, loan_amount,loan_weeks } = postResponse.postResponse
    return (
        <article className='article__successPage--container'>
            <div className='article__successPage'>
                <div className='article__successPage--title'>
                    <h1>¡Gracias!</h1>
                    <p>En breve nos pondremos en contacto contigo</p>
                </div>
                <div>
                    <p>{name} {surname}, {age} años</p>
                    <p>Email: {email}</p>
                    <p>Teléfono: {phone}</p>
                    <p>Préstamo de {loan_amount}€, a pagar en {loan_weeks} años</p>
                </div>
            </div>
        </article>
    )
}

export default SuccessPage;
