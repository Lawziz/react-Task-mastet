import { useStoredState } from './localstored'
import "./App.css"
import { TaskStats } from './components/TaskStats'
import { TaskForm } from './components/TaskForm'
import { TaskList } from './components/TaskList'

function App() {
  const [tasks, setTasks] = useStoredState("initial", [])
  const [title, setTitle] = useStoredState("Initial", '')

  const handleSubmit = (e) => {
    e.preventDefault()

    if (title.trim() === '') return

    const newTask = {
      id: Date.now(),
      date: new Date().toISOString(),
      title: title.trim(),
      completed: false
    }

    setTasks(prevTasks => [...prevTasks, newTask])
    setTitle('')
  }

  const handleDelete = (idToDelete) => {
    setTasks(prevTasks =>
      prevTasks.filter(task => task.id !== idToDelete)
    )
  }

  const handleToggle = (id) => {
    setTasks(prevTasks =>
      prevTasks.map(task => 
        (task.id === id) ? { ...task, completed: !task.completed } : task
      )
    )
  }

  const total = tasks.length
  const completed = tasks.filter(task => task.completed).length
  const pending = total - completed

  const clearAll = () => {
    window.confirm('This Action clears all tasks permanently') ? setTasks([]) : tasks
  }
  return (
    <div className="app-container">
     <div className='header'> 
      <h1>📝Task Master</h1>
      <span>Stay Productive</span>
      </div>
      <TaskForm
        title={title}
        setTitle={setTitle}
        handleSubmit={handleSubmit}
      />

      <TaskStats
        total={total}
        completed={completed}
        pending={pending}
      />

      <TaskList
        tasks={tasks}
        handleDelete={handleDelete}
        handleToggle={handleToggle}
      />

    {tasks.length > 0  && 
    <button 
    className='clear-all-btn' onClick={clearAll}>Clear All</button>
    }
    </div>
  )
}


export default App

