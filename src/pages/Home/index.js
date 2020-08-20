import React, { useState, useRef } from 'react';
import * as Yup from "yup";

import { Form } from '@unform/web'
import { FaLock, FaEye, FaEyeSlash } from 'react-icons/fa'


import Header from '../../components/Header'
import HeaderSuccess from '../../components/HeaderSuccess'
import Background from '../../assets/image/background.png'

import Mask from '../../utils/mask/cpfMask'
import Input from '../../components/Form/input'
import InputDatePicker from '../../components/Form/DatePicker/inputDatePicker'
import InputCheckbox from '../../components/Form/inputCheckbox'

import './styles.css'

function Home() {

  const formRef = useRef(null)

  const [checked, setChecked] = useState(false)
  const [success, setSuccess] = useState(false)
  const [userCpf, setUserCpf] = useState('')

  const handleChangechecked = (e) => {
    if (checked) {
      setChecked(false)
    } else {
      setChecked(true)
    }

  }

  const handleUSerCpfchange = e => {
    setUserCpf(Mask(e.target.value))
  }

  const handleSubmit = async (data, { reset }) => {

    try {
      const schema = Yup.object().shape({
        email: Yup.string().email('Digite um e-mail válido').required('O campo e-mail é obrigatório'),
        password: Yup.string().min(6, 'A senha precisa ter no mínimo 6 caracteres').required('O campo senha é obrigatório'),
        userCpf: Yup.string().min(14, 'CPF inválido').required('O campo CPF é obrigatório'),
        date: Yup.date().required('O campo data de nascimento é obrigatório').nullable(),
        checked: Yup.bool().oneOf([true], 'É preciso aceitar os termos')
      });

      await schema.validate(data, {
        abortEarly: false
      })
      setSuccess(true)

      console.log(data)

      formRef.current.setErrors({})
      reset();

    } catch (err) {
      const errorMessages = {}
      if (err instanceof Yup.ValidationError) {
        console.log(err)


        err.inner.forEach(error => {
          errorMessages[error.path] = error.message;
        })

        formRef.current.setErrors(errorMessages)
      }
    }
  }
  return (
    <>
      <div id="content-container">
        <div className="background">
          <img className="background" src={Background} alt="" />
        </div>
        <div className="container">
          {success ? <HeaderSuccess /> : <Header />}
          <div className="account">
            <h2>Criar meu cadastro</h2>
            <span>Para acompanhar sua contratação de crédito você utilizara seu e-mail e CPF.</span>
            <Form onSubmit={handleSubmit} ref={formRef}>
              <div className="input">
                <label htmlFor="email">E-mail</label>
                <Input name="email" placeholder="Email" id="email" />
              </div>

              <div div className="input">
                <label htmlFor="">CPF</label>
                <Input onChange={handleUSerCpfchange} value={userCpf} name="userCpf" type="text" id="userCpf" placeholder="135.112.616.43" />
              </div>

              <div div className="input">
                <label htmlFor="">Data de nascimento</label>
                <InputDatePicker name="date" type="text" />
              </div>

              <div div className="input">
                <label htmlFor="">Senha</label>
                <Input name="password" type="password" id="password" placeholder="Cadastre uma senha"  ></Input>
                {/* <i><FaEye size={16} color={"#8f8f8f"} /></i> */}
              </div>


              <InputCheckbox type="checkbox"
                className="rectangle"
                name="checked"
                defaultChecked={checked}
                value={checked}
                onClick={() => handleChangechecked}
                onChange={handleChangechecked} >
              </InputCheckbox>


              <button className="submit" type="submit">
                <div>
                  <FaLock size={12} color={"#fff"} />
                </div>
                <span>Cadastrar</span>
              </button>



            </Form>

            <footer>
              <p>Já fiz meu cadastro. <a href="#">Entrar agora.</a></p>
            </footer>
          </div>
        </div>

        <div className="text-image">
          <div className="quote">"Obtive crédito para capital de giro.
          O processo foi bem sucedido e tudo que foi abordado,
        foi cumprido."</div>

          <div className="name">
            <p>Camila Bragança,</p>
          Sideral Tecnologia
      </div>
        </div>

      </div>
    </>
  );
}

export default Home;
