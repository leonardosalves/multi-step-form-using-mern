import React from "react";
import { useForm } from "react-hook-form";
import { Form, Button } from "react-bootstrap";
import { motion } from "framer-motion";

const SecondStep = (props) =>{
    const { user } = props
    const { register, handleSubmit, errors } = useForm({
        defaultValues:{
            user_email: user.user_email,
            user_password: user.user_password
        }
    })

    const onSubmit = (data) =>{
        props.updateUser(data)
        props.history.push('/third')
    }

    return(
        <Form className="input-form" onSubmit={handleSubmit(onSubmit)}>
            <motion.div 
                className="col-md-6 offset-md-3"
                initial={{ x : '100vw' }}
                animate={{ x : 0 }}
                transition={{ stiffness : 150 }}
                >
                <Form.Group controlId="first_name">
                    <Form.Label>Email</Form.Label>
                    <Form.Control 
                        type="email"
                        name="user_email"
                        placeholder="Digite seu email."
                        autoComplete="off"
                        ref={register({
                            required: 'Email é obrigatório!',
                            pattern:{
                                value: /^[^@]+@[^@]+\.[^@.]{2,}$/,
                                message: 'Email inválido!'
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
                        name="user_password"
                        placeholder="Escolha uma senha."
                        autoComplete="off"
                        ref={register({
                            required: 'Senha é obrigatória!',
                            minLength:{
                                value: 6,
                                message: 'A senha deve ter pelo menos 6 caracteres!'
                            }
                        })}
                        className={`${errors.user_password ? 'input-error' : ''}`}
                    />
                    {errors.user_password && (
                        <p className="errorMsg">{errors.user_password.message}</p>
                    )}
                </Form.Group>

                <Button variant="primary" type="submit">
                    Próximo
                </Button>

            </motion.div>
        </Form>
    )
}

export default SecondStep