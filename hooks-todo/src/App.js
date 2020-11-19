import React, { useState } from 'react';
import TodoList from "./TodoList";
import './App.css';



const App = () => {

  const [inputList , setInputList] = useState("");

  // empty Array
  const [Items, setItems] = useState([]);



  const itemEvent = (event) => {
    setInputList(event.target.value);
  };

  const ListOfItems = () => {
    setItems((oldItems)=>{
      return [...oldItems, inputList];

    })
    setInputList("");
  };

  const removeItem = (id) => {
    console.log("remove item")
    setItems((oldItems)=> {
      return oldItems.filter((arrElem, index)=>{
        return index !== id;
      })
    })
  }

  
  return (
    // raect figments
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1> ToDo List </h1>
          <br />
          <input type= "text" 
            onChange={itemEvent} 
            placeholder= "Add a item !!" 
            value= {inputList}
          />
          <button onClick={ListOfItems}> + </button>

          <ol> 
            {/* <li> {inputList}</li> */}
            {/* calling array with map methode */}
            {Items.map((itemval, index)=> {
             return <TodoList 
              key={index} 
              id={index}
              text = {itemval} 
              onSelect = {removeItem}
              />
            })}
          </ol>
        </div>
      </div>
    </>
  );
};
export default App;
