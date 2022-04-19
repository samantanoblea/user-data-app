import React from 'react';
import '../style/ErrorPage.css';

const ErrorPage = (error)=>{
    return (
        <article className='article__errorPage--container'>
            <div className='article__errorPage--text'>
                <h1>Hemos tenido <br/> un problema</h1>
                <p>{error.error}</p>
            </div>
        </article>
    )
}

export default ErrorPage;
