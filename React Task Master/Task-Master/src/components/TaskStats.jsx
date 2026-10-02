import './TaskStats.css'

export function TaskStats({ total, completed, pending }) {
  return (
    <div className="task-stats">
      <p className='total-btn'><strong>{total}</strong> Total </p>
      <p className='pending-btn'><strong>{pending}</strong> Pending </p>
      <p className='completed-btn'><strong>{completed}</strong> Completed </p>
    </div>
  )
}

