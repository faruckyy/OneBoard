import { useState } from 'react'
import { useTaskStore } from './useTaskStore'
import type { Task } from './useTaskStore'

export default function OpsTasks() {
  const { tasks, dispatch } = useTaskStore()
  const [open, setOpen] = useState(false)
  const [title, setTitle] = useState('')
  const [client, setClient] = useState('')
  const [priority, setPriority] = useState<'Low' | 'Medium' | 'High'>('Low')

  const add = () => {
    const task: Task = {
      id: Math.random().toString(36).slice(2),
      title,
      client,
      priority,
      status: 'To Do',
    }
    dispatch({ type: 'add', task })
    setOpen(false)
  }

  return (
    <div className="space-y-4">
      <button onClick={() => setOpen(true)} className="border px-3">Nova Tarefa</button>
      {open && (
        <div className="space-y-2 border p-4">
          <input placeholder="Título" value={title} onChange={(e) => setTitle(e.target.value)} className="border px-2" />
          <input placeholder="Cliente" value={client} onChange={(e) => setClient(e.target.value)} className="border px-2" />
          <select value={priority} onChange={(e) => setPriority(e.target.value as 'Low' | 'Medium' | 'High')} className="border px-2">
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
          </select>
          <button onClick={add} className="border px-3">Salvar</button>
        </div>
      )}
      <table className="min-w-full text-left">
        <thead>
          <tr>
            <th>Título</th>
            <th>Cliente</th>
            <th>Prioridade</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((t) => (
            <tr key={t.id}>
              <td>{t.title}</td>
              <td>{t.client}</td>
              <td>{t.priority}</td>
              <td>{t.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
