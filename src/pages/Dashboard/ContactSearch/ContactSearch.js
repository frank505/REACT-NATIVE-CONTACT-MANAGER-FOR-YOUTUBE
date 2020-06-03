import React from 'react'
import { Container ,Root } from 'native-base';
import SearchBar from './components/SearchBar';
import ItemList from './components/ItemList';



export default function ContactSearch() {

 

    return (
    
      <Container>
       <SearchBar />
       
   <ItemList/>
      
       

      </Container>
   
    )
}
