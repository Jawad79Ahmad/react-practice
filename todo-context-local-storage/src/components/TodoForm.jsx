import { useState } from "react";
import { useTodo } from "../context/TodoContext"

function TodoForm() {
  const [title, setTitle] = useState('');
  const {createItem} = useTodo();

  const submitTodo = (e) => {
    e.preventDefault();
    if(title) {
      createItem({title: title, isCompleted: false})
      setTitle('');
    }
  }

  return (
    <form onSubmit={submitTodo} className="flex">
      <input
        type="text"
        value={title}
        onChange={(e) => { setTitle(e.target.value) }}
        placeholder="Write Todo..."
        className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
      />
      <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
        Add
      </button>
    </form>
  )
}

export default TodoForm
