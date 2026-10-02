import './TaskItem.css';

export function TaskItem({ task, handleDelete, handleToggle }) {

    const formattedDateTime = new Date(task.date).toLocaleString('en-US', {
        dateStyle: 'short',
        timeStyle: 'short',
    }); 

    return (
        <li key={task.id} className="task-item">
            <span
                onClick={() => handleToggle(task.id)}
                style={{
                    cursor: "pointer",
                    textDecoration: task.completed ? "line-through" : "none"
                }}
            >
                {task.title} <p style={{fontSize: '0.5em'}}>({formattedDateTime})</p>
                
            </span>
            <button className='delete-btn' onClick={() => handleDelete(task.id)}>×</button>
        </li>
    )
}
