import React from "react";
import { useForm } from "react-hook-form";
import { Form, Button } from "react-bootstrap";

const FirstStep = (props) =>{
    const { register, handleSubmit, errors } = useForm()

    const onSubmit = (data) =>{
        console.log(data)
        props.history.push('/second')
    }

    return(
        <Form className="input-form" onSubmit={handleSubmit(onSubmit)}>
            <div className="col-md-6 offset-md-3">
                <Form.Group controlId="first_name">
                    <Form.Label>Nome</Form.Label>
                    <Form.Control 
                        type="text"
                        name="first_name"
                        placeholder="Digite seu primeiro nome."
                        autoComplete="off"
                        ref={register({
                            required: 'Nome é obrigatório!',
                            pattern: {
                                value: /^[a-zA-Z]+$/,
                                message: 'O nome deve ter somente caracteres!'
                            }
                        })}
                        className={`${errors.first_name ? 'input-error' : ''}`}
                    />
                    {errors.first_name && (
                        <p className="errorMsg">{ errors.first_name.message }</p>
                    )}
                </Form.Group>
                <Form.Group controlId="last_name">
                    <Form.Label>Sobrenome</Form.Label>
                    <Form.Control 
                        type="text"
                        name="last_name"
                        placeholder="Digite seu sobrenome."
                        autoComplete="off"
                        ref={register({
                            required: 'Sobrenome é obrigatório!',
                            pattern: {
                                value: /^[a-zA-Z]+$/,
                                message: 'O sobrenome deve ter somente caracteres!'
                            }
                        })}
                        className={`${errors.last_name ? 'input-error' : ''}`}
                    />
                    {errors.last_name && (
                        <p className="errorMsg">{ errors.last_name.message }</p>
                    )}
                </Form.Group> 

                <Button variant="primary" type="submit">
                        Próximo
                </Button>
            </div>
        </Form>
    )
}

export default FirstStep