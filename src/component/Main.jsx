// import { todoData } from "../App"
import AddItem from "./AddItem"

import {FaTrash} from 'react-icons/fa'
// import { useContext } from "react"
function mian({todo ,newItem ,setTodo,setNewItem}) {
  // let todo = useContext(todoData)

const handDelete=(id)=>{
  let updatedTodos = todo.filter((Element)=> id!=Element.id)
  setTodo(updatedTodos)
}

const handleSubmitt = (e) => {
  e.preventDefault();
  if (newItem.trim() !== "") {
    let id = todo.length ? todo[todo.length - 1].id + 1 : 1;
    let newTodo = { id, item: newItem, checked: false }; // Create a new item object with the item name
    let updatedTodos = [...todo, newTodo]; // Only add the newTodo object
    setNewItem('');
    setTodo(updatedTodos);
  }
};


const handleCheckbox =(id)=>{
  let updatedTodos = todo.map((item)=>id==item.id?{...item ,checked:!item.checked}:item)
  setTodo(updatedTodos)
}
  return (
    <>
        <AddItem newItem={newItem} handleSubmitt={handleSubmitt} />
    <div className="main">
        <ul className="ul">
        {todo.length === 0 && <p style={{"textAlign":"center","marginTop":"30px","fontSize":"1.5rem"}}> 0 items in list</p>}
          {todo.map((item)=> (
            <li key={item.id}  className={item.fadeIn ? 'fade-in' : ''}>
              <div className="flex">
                <input type="checkbox" checked={item.checked} onChange={()=>{handleCheckbox(item.id)}} />
                <div style={{ textDecoration: item.checked ? 'line-through' : 'none' }}>{item.item.slice(0,1).toUpperCase()+item.item.slice(1)}</div>

              </div>  
              <FaTrash 
              onClick={()=>{handDelete(item.id)}}
              role="button"
              tabIndex={0}/>
            </li>
            
            ))}
        </ul>
    </div>
    </>
  )
}

export default mian
