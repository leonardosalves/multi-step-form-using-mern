import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import { BASE_API_URL } from "../utils/constants";

const Login = () =>{
    const { register, handleSubmit, errors } = useForm()
    const [ successMessage, setSuccessMessage ] = useState("")
    const [ errorMessage, setErrorMessage ] = useState("")
    const [ userDetails, setUserDetails ] = useState("")

    const onSubmit = async (data) =>{
        console.log(data)

        try{
            const response = await axios.post(`${BASE_API_URL}/login`, data)
            setSuccessMessage("Usuário logado com sucesso!")
            setErrorMessage("")
            setUserDetails(response.data)
        }catch(error){
            console.log(error)
            if(error.response){
                console.log('error', error.response.data)
                setErrorMessage(error.message.data)
            }
        }
    }

    return(
        <Form className="input-form" onSubmit={handleSubmit(onSubmit)}>
            <div className="col-md-6 offset-md-3">
                {errorMessage ? (
                    <p className="errorMsg login-error">{errorMessage}</p>
                ) : (
                    <div>
                        <p className="successMsg">{successMessage}</p>
                        {userDetails && (
                            <div className="user-details">
                                <p>A seguir os detalhes do Usuário:</p>
                                <div>Nome: {userDetails.first_name}</div>
                                <div>Sobrenome: {userDetails.last_name}</div>
                                <div>E-mail: {userDetails.user_email}</div>
                                <div>País: {userDetails.country}</div>
                                <div>Estado: {userDetails.state}</div>
                                <div>Cidade: {userDetails.city}</div>
                            </div>
                        )}
                    </div>
                )}
                <Form.Group controlId="first_name">
                    <Form.Label>E-mail</Form.Label>
                    <Form.Control 
                        type="email"
                        name="user_email"
                        placeholder="Entre seu endereço de E-mail."
                        ref={register({
                            required: "Email é obrigatório!",
                            pattern:{
                                value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                                message: "E-mail inválido!"
                            }
                        })}
                        className={`${errors.user_email ? 'input-error' : ''}`}
                    />
                    {errors.user_email && (
                        <p className="errorMsg">{errors.user_email.message}</p>
                    )}
                </Form.Group>

                <Form.Group controlId="password">
                    <Form.Label>Senha</Form.Label>
                    <Form.Control 
                        type="password"
                        name="password"
                        placeholder="Digite sua senha."
                        ref={register({
                            required: "Senha é obrigatória!",
                            minLength:{
                                value: 6,
                                message: "A senha deve ter no minimo 6 caracteres."
                            }
                        })}
                        className={`${errors.user_password ? 'input-error' : ''}`}
                    />
                    {errors.user_password && (
                        <p className="errorMsg">{errors.user_password.message}</p>
                    )}
                </Form.Group>

                <Button variant="primary" type="submit">
                    Checar login
                </Button>
            </div>
        </Form>
    )
}

export default Login