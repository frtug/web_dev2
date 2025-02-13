import { useState } from 'react'
import { Plus } from 'lucide-react'
import './App.css'
import { Provider, useDispatch, useSelector } from 'react-redux'
// import { store } from './redux/store'

import {createStore } from 'redux'

const act = {
  ADD_TODO:"ADD_TODO"
}

const todoReducer = (state =[],action) => {
  switch(action.type){
    case act.ADD_TODO:
      return [...state,{id:Date.now(),text:action.payload,complete:false}]
      // case for delete todo
      // update todo
  }
}

const store = createStore(todoReducer) // redux cers




const TodoApp = ()=>{
  const todos = useSelector(state => state) 
  // const [todos, setTodos] = useState([]); // array of object 
  const [newTodo, setNewTodo] = useState(''); // storing the current value that is added in todo 
  const dispatch = useDispatch();

  const AddTodo = (event)=>{
    event.preventDefault();

  }


  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-2xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-8"> Todo App</h1>

        {/* Input form */}
        <div className="flex gap-2 mb-6">
          <input
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)} // this is an value
            onKeyUp={(e) => e.key === 'Enter' && AddTodo()}
            placeholder="Add a new todo..."
            className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={AddTodo}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
          >
            <Plus className="w-5 h-5" />
          </button>
        </div>
        </div>
        </div>
  )
}
function App() {
  return (
    <div>Hello</div>
  )
  // <Provider store={store}>
  //   <TodoApp/>
  // </Provider>
}

export default App
