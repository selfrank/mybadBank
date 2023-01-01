import React from 'react';
import {Card} from './context'

export default function Home(){
  return (
    <Card
      txtcolor="black"
      header="BadBank Home Page"
      title="Welcome to the bank"
      text="You can move around using the navigation bar."
      body={(<img src={require('./bank.png')} className="img-fluid" alt="Responsive"/>)}
    />    
  );  
}
