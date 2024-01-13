import { useEffect, useState } from "react"
import TodoForm from "./components/TodoForm"
import { TodoProvider } from "./context/TodoContext"
import TodoItem from "./components/TodoItem";

function App() {
  const [items, setItems] = useState([]);

  const createItem = (item) => {
    setItems((prevItems) => [{id: Date.now(), ...item}, ...prevItems])
  }

  const updateItem = (id, item_title) => {
    setItems((prevItems) => prevItems.map(
      (item) => (item.id === id ? {...item, title: item_title} : item)
    ))
  }

  const toggleItemCompleted = (id) => {
    setItems((prevItems) => prevItems.map(
      (item) => (item.id === id ? {...item, isCompleted: !item.isCompleted} : item)
    ))
  }

  const deleteItem = (id) => { setItems((prevItems) => prevItems.filter((item) => item.id != id)) }

  useEffect(() => {
    const todo_items = JSON.parse(localStorage.getItem('todo_items'));

    if (todo_items && todo_items.length > 0) {
      setItems(todo_items)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('todo_items', JSON.stringify(items));
  }, [items])


  return (
    <TodoProvider value={{items, createItem, updateItem, toggleItemCompleted, deleteItem}}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl text-center mb-8 mt-2">Todo Project</h1>
          <div className="mb-4">
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {
              items.map((item) => (
                <div key={item.id} id={`item_${item.id}`} className="w-full">
                  <TodoItem item={item} />
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </TodoProvider>
  )
}

export default App
