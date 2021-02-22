import React, {useState} from 'react'
import {auth} from '../firebaseconfig'
import {useHistory} from 'react-router-dom'


const Login = () => {
    const historial = useHistory('')
    const[email, setEmail] = useState('')
    const[pass, setPass] = useState('')
    const [msgerror, setMsgError] = useState(null)

    const RegistrarUsuario = (e)=>{
        e.preventDefault()
        auth.createUserWithEmailAndPassword(email, pass)
        .then(r => {
            historial.push('/')
        })
        .catch(e =>{
            if(e.code == 'auth/invalid-email'){
                setMsgError('Formato Email incorrecto')
            }
            if (e.code == 'auth/weak-password'){
                setMsgError('La password debe tener 6 caracteres o mas')
            }
        })
    }
    const LoginUsuario = ()=>{
        auth.signInWithEmailAndPassword(email,pass)
        .then((r) => {
            historial.push('/')
        })
        .catch((err) =>{
            // "auth/user-not-found"
            if(err.code == "auth/user-not-found"){
                setMsgError('Password incorrecta')
            }
        })
    }
    return (
        <div className='row mt-5'>
            <div className='col'></div>
            <div className='col'>           
            <form onSubmit={RegistrarUsuario} className='form-group'>
                
                <input className = 'form-control'
                onChange={(e)=>{setEmail(e.target.value)}} 
                type="text" 
                placeholder='Introduce el email'/>
                
                <input className='form-control mt-2'
                onChange={(e)=>{setPass(e.target.value)}}
                type="password" 
                placeholder='Introduce el password'/>
                
                <input className = 'form-control mt-2 "btn btn-dark' 
                type='text' 
                value= 'Registrar Usuario'
                type='submit'/>
            </form>
            <button onClick={LoginUsuario} 
            className='btn btn-success btn-block'>
                Iniciar sesion
            </button>
            {
                msgerror != null ? 
                (
                    <div>{msgerror}</div>
                )
                :
                (
                    <span></span>
                )   
            }
                </div> 
            <div className='col'></div>
        </div>
    )
}

export default Login
