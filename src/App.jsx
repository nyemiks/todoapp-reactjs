import { useState } from 'react'
import Todo from './components/Todo'
//import InlineComponent from './components/InlineComponent'
//import OutlineComponent from './components/OutlineComponent'
import Header from './css/header';
import "./App.css"

function App() {
 
  return (
   /**  
    *  <InlineComponent/>   
    * */ 
  
   <div>
     <Header></Header>
     <Todo></Todo>
   </div>
   
  )
}

export default App
