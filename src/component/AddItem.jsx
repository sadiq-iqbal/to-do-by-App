import { FaPlusCircle } from "react-icons/fa"
import { useContext } from "react"
import { setNewItemProp } from "../App"
function AddItem({newItem ,handleSubmitt}) {
  let setNewItem = useContext(setNewItemProp)


  return (
    <form className="form" onSubmit={(e)=>{handleSubmitt(e,newItem)}}>
        <div className="addItem">
            <input type="text" value={newItem} onChange={(e)=>setNewItem(e.target.value)} placeholder="Add Item here"id="add" />
            <label htmlFor="add">Add item</label>
            <button><FaPlusCircle/></button>
        </div>
    </form>
  )
}

export default AddItem
