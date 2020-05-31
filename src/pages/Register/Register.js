import React from 'react'
import  RegisterForm  from './components/RegisterForm'
import { Container } from 'native-base'
import Header from './components/Header'


export default function Register() {
    return (
        <Container>
        <Header />
       <RegisterForm  />
        </Container>
       
    )
}
