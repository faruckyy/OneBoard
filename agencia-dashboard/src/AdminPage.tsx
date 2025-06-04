import { useTaskStore } from './useTaskStore'
import CleaningSchedule from './CleaningSchedule'

export default function AdminPage() {
  const { tasks } = useTaskStore()
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-3 gap-4">
        <div className="border p-4">Total tarefas: {tasks.length}</div>
        <div className="border p-4">Pendências de limpeza: {/* placeholder */}</div>
        <div className="border p-4">Usuários: {/* placeholder */}</div>
      </div>
      <CleaningSchedule />
    </div>
  )
}
