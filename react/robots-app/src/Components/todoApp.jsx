import  { useCallback, useState,memo, useMemo} from 'react';
import { Trash2, Plus, CheckCircle, Circle } from 'lucide-react';




const TodoItem = ({ todo, onToggle, onDelete }) => {
  console.log(`Rendering TodoItem: ${todo.text}`); // For demo

  return (
    <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow mb-2 hover:shadow-md transition-shadow">
      <div className="flex items-center space-x-3">
        <button
          onClick={() => onToggle(todo.id)}
          className="text-gray-500 hover:text-blue-500 transition-colors"
        >
          {todo.completed ? (
            <CheckCircle className="w-6 h-6 text-green-500" />
          ) : (
            <Circle className="w-6 h-6" />
          )}
        </button>
        <span className={`${todo.completed ? 'line-through text-gray-400' : 'text-gray-700'}`}>
          {todo.text}
        </span>
      </div>
      <button
        onClick={() => onDelete(todo.id)}
        className="text-red-400 hover:text-red-600 transition-colors"
      >
        <Trash2 className="w-5 h-5" />
      </button>
    </div>
  );
};

// TodoStats component
const TodoStats = memo(({ todos }) => {
  console.log('Rendering TodoStats'); // For demo

  const stats =  useMemo(()=>{
    return {
      total: todos.length,
      completed: todos.filter(todo => todo.completed).length,
      incomplete: todos.filter(todo => !todo.completed).length
    };
  },[todos]);

  return (
    // Object.entries()
    <div className="grid grid-cols-3 gap-4 mb-6"> 
      {Object.entries(stats).map(([key, value]) => (
        <div key={key} className="bg-white p-4 rounded-lg shadow text-center">
          <div className="text-2xl font-bold text-gray-700">{value}</div>
          <div className="text-gray-500 capitalize">{key}</div>
        </div>
      ))}
    </div>
  );
});

// Main App Component
const App = () => {
  const [todos, setTodos] = useState([]); // array of object 
  const [newTodo, setNewTodo] = useState(''); // storing the current value that is added in todo 
  const [filter, setFilter] = useState('all'); // all, active,completed

  const filteredTodos = () => {
    console.log('Filtering todos...'); // For demonstration
    switch (filter) {
      case 'active':
        return todos.filter(todo => !todo.completed);
      case 'completed':
        return todos.filter(todo => todo.completed);
      default:
        return todos;
    }
  };

  const handleToggle = (id) => {
    console.log('Toggle handler called'); // For demo
    setTodos(prevTodos =>
      prevTodos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleDelete = (id) => {
    console.log('Delete handler called'); // For demo
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
  };

  // useMemo, useCallback,memo 
  const handleAddTodo = useCallback(() => {
    if (!newTodo.trim()) return; // if todo is empty
    setTodos(prevTodos => [
      ...prevTodos,
      {
        id: Date.now(),
        text: newTodo.trim(),
        completed: false
      }
    ]);
    setNewTodo('');
  },[newTodo]);

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
            onKeyUp={(e) => e.key === 'Enter' && handleAddTodo()}
            placeholder="Add a new todo..."
            className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={handleAddTodo}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
          >
            <Plus className="w-5 h-5" />
          </button>
        </div>

        {/* Stats */}
        <TodoStats todos={todos} />

        {/* Filters */}
        <div className="flex gap-2 mb-4">
          {['all', 'active', 'completed'].map((filterType) => (
            <button
              key={filterType}
              onClick={() => setFilter(filterType)}
              className={`px-4 py-2 rounded-lg transition-colors ${
                filter === filterType
                  ? 'bg-blue-500 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {filterType.charAt(0).toUpperCase() + filterType.slice(1)}
            </button>
          ))}
        </div>

        {/* Todo list */}
        <div className="space-y-2">
          {filteredTodos().map(todo => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onToggle={handleToggle}
              onDelete={handleDelete}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;