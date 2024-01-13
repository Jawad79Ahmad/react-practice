import { useState } from "react";
import { useTodo } from "../context/TodoContext";

function TodoItem({item}) {
  const {updateItem, deleteItem, toggleItemCompleted} = useTodo();

  const [title, setTitle] = useState(item.title);

  const [isItemEditable, setIsItemEditable] = useState(!item.isCompleted)

  const toggleCompleted = () => {
    toggleItemCompleted(item.id);
    setIsItemEditable(false);
  }

  function editItem() {
    updateItem(item.id, title);
    setIsItemEditable(false);
  }

  return (
    <div className={`${ item.isCompleted ? "bg-gray-400" : "bg-gray-100" } flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black`}>
      <div className="flex space-x-2">
        <span className="mt-1">Completed</span>
        <input
          type="checkbox"
          className="cursor-pointer"
          checked={item.isCompleted}
          onChange={toggleCompleted}
        />
      </div>
      <input
        type="text"
        className={`${isItemEditable ? "border-black/10 px-2" : "border-transparent"} ${item.isCompleted ? "line-through" : ""} border outline-none w-full bg-transparent rounded-lg `}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        readOnly={!isItemEditable}
      />

      <button
        className="inline-flex rounded-lg justify-center items-center shrink-0 disabled:opacity-50"
        onClick={() => {
          if (item.isCompleted) return;

          if (isItemEditable) {
            editItem();
          } else {
            setIsItemEditable((prev) => !prev);
          }
        }}
        disabled={item.isCompleted}
      >
        <div className={`${isItemEditable ? "text-blue-500 bg-white hover:bg-blue-500 hover:text-white" : "text-teal-500 bg-white hover:bg-teal-500 hover:text-white"} inline-flex w-8 h-8 rounded-lg text-sm justify-center items-center shrink-0`}>
          <svg className={`h-5 w-5 ${isItemEditable ? 'hidden' : ''}`} viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M9 7 h-3a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-3" />  <path d="M9 15h3l8.5 -8.5a1.5 1.5 0 0 0 -3 -3l-8.5 8.5v3" />  <line x1="16" y1="5" x2="19" y2="8" /></svg>
          <svg className={`h-5 w-5 ${!isItemEditable ? 'hidden' : ''}`} viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round">  <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" />  <polyline points="17 21 17 13 7 13 7 21" />  <polyline points="7 3 7 8 15 8" /></svg>
        </div>
      </button>

      <button
        className="inline-flex w-8 h-8 rounded-lg text-sm justify-center items-center text-red-500 bg-white hover:bg-red-500 hover:text-white shrink-0"
        onClick={() => deleteItem(item.id)}
      >
        <svg className="h-5 w-5"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round">  <polyline points="3 6 5 6 21 6" />  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />  <line x1="10" y1="11" x2="10" y2="17" />  <line x1="14" y1="11" x2="14" y2="17" /></svg>
      </button>
    </div>
  )
}

export default TodoItem
