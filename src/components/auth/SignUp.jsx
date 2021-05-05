import React from 'react'
import useForm from '../../hooks/useForm'
import { Link } from 'react-router-dom';
import { checkPassword, isEmptyField } from '../../helpers'

const SignUp = () => {
    const { values, handleInputChange, reset } = useForm({
        name : '',
        email : '',
        password : '',
        confirmation : ''
    })

    const onSubmit = (e) => {
        e.preventDefault();

    }

    return ( 
        <div className="form-usuario">
            <div className="contenedor-form sombra-dark">
                <h1>Crea tu cuenta</h1>
                <form action="">
                    <div className="campo-form">
                        <label htmlFor="name">Nombre</label>
                        <input 
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Tu Nombre"
                            onChange={handleInputChange}
                            value={values.name}
                        />
                    </div>
                    <div className="campo-form">
                        <label htmlFor="email">Email</label>
                        <input 
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Tu email"
                            onChange={handleInputChange}
                            value={values.email}
                        />
                    </div>
                    <div className="campo-form">
                        <label htmlFor="password">Contraseña</label>
                        <input 
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Tu Contraseña"
                            onChange={handleInputChange}
                            value={values.password}
                        />
                    </div>
                    <div className="campo-form">
                        <label htmlFor="password">Confirmar Contraseña</label>
                        <input 
                            type="password"
                            id="confirmation"
                            name="confirmation"
                            placeholder="Confirma tu Contraseña"
                            onChange={handleInputChange}
                            value={values.confirmation}
                        />
                    </div>
                    <div className="campo-form">
                        <input 
                            type="submit"
                            className="btn btn-primario btn-block"
                            value="Registrarse"
                            onSubmit={onSubmit}
                        />
                    </div>
                </form>
                <Link to="/login" className="enlace-cuenta">
                    Iniciar Sesion
                </Link>
            </div>
        </div>
    )
}
 
export default SignUp;