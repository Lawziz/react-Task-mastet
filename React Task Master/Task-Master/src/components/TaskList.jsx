import { TaskItem } from './TaskItem'
import './TaskList.css'

export function TaskList({ tasks, handleDelete, handleToggle }) {
  return (
    <ul className="List-container">
      {tasks.map(task => (
        <TaskItem
          key={task.id}
          task={task}
          handleDelete={handleDelete}
          handleToggle={handleToggle}
        />
      ))}
    </ul>
  )
}
