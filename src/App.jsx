import {createContext, useState } from "react";
import Header from "./component/Header";
import Main from "./component/Main";
// import { useEffect } from "react";
import Footer from "./component/Footer";
// import { db } from "./Firebase";
// import {query, collection} from './firebase/firestore'
export const setNewItemProp = createContext()

function App() {
  // useEffect(()=>{
  //   const d = query(collection(db, 'todo'))
  // },[])
  const newArray = [ ];
  const [newItem , setNewItem]= useState("")
  const [todo, setTodo] = useState(newArray);


  return (
    <>
      <div className="App">
          <Header />
        <setNewItemProp.Provider value={setNewItem}>
          <Main todo={todo} setTodo={setTodo} newItem={newItem} setNewItem={setNewItem}/>
        </setNewItemProp.Provider>
          <Footer todo={todo}/>
      </div>
    </>
  );
}

export default App;
