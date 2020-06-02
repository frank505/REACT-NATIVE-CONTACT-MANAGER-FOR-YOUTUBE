import React from 'react'
import { Container,Root } from 'native-base'
import Header from './components/Header'
import ItemList from './components/ItemList';


export default function ViewContact() {

    

    return (
        <Root>
        <Container>
         <Header />
         <ItemList/>
        </Container>
        </Root>
    )
}
