
import { Link } from "react-router-dom"

import Header from '../components/Header.jsx'
import './Login.css'

const Login = () => {
    return (
        <div>
            <Header />

            <div className="container_login">
                <div className='div_login'>
                    <h2>Login</h2>
                    <input className='input' name="email" placeholder='E-mail' required/>
                    <input className='input' name="password" placeholder='Senha' required/>

                    <button className='entrar'>Entrar</button>
                    <p>Não tem uma conta? <Link to="/cadastrar">&nbsp;Registre-se</Link></p>
                </div>
            </div>

        </div>
    )
}

export default Login