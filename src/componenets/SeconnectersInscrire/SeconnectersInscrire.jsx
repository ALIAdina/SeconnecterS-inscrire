import React, { useState } from 'react'
import './SecoonectersInscrire.css'
import email_icon from '../../assets/email.png'
import password_icon from '../../assets/password.png'
import person_icon from '../../assets/person.png'
const SeconnectersInscrire = () => {
    const[action,setAction]=useState("S'inscrire");
  return (
    <div className='container'>
        <div className="header">
            <div className="text">{action}</div>
            <div className="underline"></div>
        </div>
        <div className="inputs">
        {action==="S'inscrire"?
     <div className="input">
                
     <img src={person_icon} alt="" className="" />
     <input type="text" placeholder='Nom'/>
 </div>:<></>    
    }
           
            <div className="input">
                <img src={email_icon} alt="" className="" />
                <input type="email" placeholder='Email'/>
            </div>
            <div className="input">
                <img src={password_icon} alt="" className="" />
                <input type="password" placeholder='password'/>
            </div>
       
        </div>
        {action==="Se connecter"? <div className="forget-password">
            Mot de pass oublié
        </div>:<></>}
       
        <div className="submit_container">
            <div className={action==="S'inscrire"?"submit":"submit gray"} onClick={()=>{setAction("S'inscrire")}}>S'inscrire</div>
            <div className={action==="Se connecter"?"submit":"submit gray"}onClick={()=>{setAction("Se connecter")}}>Se connecter</div>
        </div>
    </div>
  )
}

export default SeconnectersInscrire
