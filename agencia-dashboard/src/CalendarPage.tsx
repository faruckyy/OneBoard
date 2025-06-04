import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import { useTaskStore } from './useTaskStore'

export default function CalendarPage() {
  const { tasks } = useTaskStore()
  const events = tasks.filter(t => t.dueDate).map(t => ({ title: t.title, date: t.dueDate! }))
  return (
    <FullCalendar plugins={[dayGridPlugin]} initialView="dayGridMonth" events={events} />
  )
}
