import React, { useState } from 'react'
import axios from '../../api/axios'

const REGISTRATION_URL = '/api/register' 

function Register() {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [success, setSuccess] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()

        try{
            const response = await axios.post(REGISTRATION_URL, {
                username: username,
                password: password
            },
            {
                headers: { 'Content-Type': 'application/json' }
            })

            console.log(response.data)

            setSuccess(true)

        }catch{

            console.log('No funciona')

        }
    }

  return (
    <div>
      {success ? (
                <section className='success'>
                    <h2>¡Registro completado!</h2>
                    <a href='#' className='btn-login'>Ve al inicio de sesión</a>
                </section> 
            ) : (
                <section>
                    <h1>Registro de usuario</h1>
                        <div className='box-registration'>
                            <form onSubmit={handleSubmit}>
                                <label htmlFor='username'>username</label>
                                <input
                                    type='text'
                                    id='username'
                                    autoComplete='off'
                                    onChange={(e) => setUsername(e.target.value)}
                                    value={username}
                                    required
                                />

                                <label htmlFor='password'>Contraseña</label>
                                <input
                                    type='password'
                                    id='password'
                                    onChange={(e) => setPassword(e.target.value)}
                                    value={password}
                                    required
                                />
                                <button className='btn'>Registrarse</button>
                            </form>

                            <a href="/login" className='btn-login'>Iniciar sesión</a>
                        </div>
                </section>
            )}
    </div>
  )
}

export default Register
