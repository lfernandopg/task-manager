import React from 'react'
import useForm from '../../hooks/useForm'
import { Link } from 'react-router-dom';

const Login = () => {

    const { values, handleInputChange, reset } = useForm({
        email : '',
        password : ''
    })

    const onSubmit = (e) => {
        e.preventDefault();
    }

    return ( 
        <div className="form-usuario">
            <div className="contenedor-form sombra-dark">
                <h1>Iniciar Sesion</h1>
                <form action="">
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
                        <input 
                            type="submit"
                            className="btn btn-primario btn-block"
                            value="Iniciar Sesion"
                            onSubmit={onSubmit}
                        />
                    </div>
                </form>
                <Link to="/signup" className="enlace-cuenta">
                    Obtener Cuenta
                </Link>
            </div>
        </div>
    );
}
 
export default Login;