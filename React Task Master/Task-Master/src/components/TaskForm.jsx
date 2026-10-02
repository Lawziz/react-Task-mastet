import React from 'react'
import './TaskForm.css'

export function TaskForm({ title, setTitle, handleSubmit }) {
  return (
    <div>
      <form id="task-input" onSubmit={handleSubmit}>
        <input
          className="task-input"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Add a new task..."
        />

        <button className="add-btn" type="submit">
          Add
        </button>
      </form>
    </div>
  )
}


