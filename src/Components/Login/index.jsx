import React from "react";
import { useState } from "react";
import { useHistory } from "react-router";
import { toast } from "react-toastify";
import "./style.css";

const Login = () => {

    const history = useHistory();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        if(!email && !password) {
            toast.error("E-mail e senha são obrigatórios", {
                position: toast.POSITION.TOP_CENTER,
                theme: "colored"
            });
            return
        } else if (!email) {
            toast.error("E-mail é obrigatório", {
                position: toast.POSITION.TOP_CENTER,
                theme: "colored"
            });
            return
        }else if (!password) {
            toast.error("Senha é obrigatória", {
                position: toast.POSITION.TOP_CENTER,
                theme: "colored"
            });
            return
        } else (
            toast.success("Login realizado com sucesso", {
                position: toast.POSITION.TOP_CENTER,
                theme: "colored"
            })
        )

        history.push("/map");

    }

    return (
        <div className="login-page">

            <div className="container-login">
                <h1 className="title-login">Sistema de Gestão Integrada</h1>

                <form className="form-login" onSubmit={handleSubmit}>
                    
                    <label><input className="input-login" type="email" value={email} onChange={(event) => setEmail(event.target.value)}/>Email</label>
                    <label><input className="input-login"type="password"  value={password} onChange={(event) => setPassword(event.target.value)}/>Senha</label>
                    <button type="submit" className="btn-sign-in">Sign in</button>
            
                </form>
            </div>
            
        </div>
    )
}

export default Login;