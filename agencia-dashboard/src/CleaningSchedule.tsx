import { useMemo, useState } from 'react'

interface Cleaner {
  name: string
  weekday: number // 0-6
}

const MOCK_CLEANERS: Cleaner[] = [
  { name: 'Alice', weekday: 1 },
  { name: 'Bob', weekday: 3 },
  { name: 'Carol', weekday: 5 },
]

export default function CleaningSchedule() {
  const [cleaners, setCleaners] = useState(MOCK_CLEANERS)
  const [newName, setNewName] = useState('')
  const [newDay, setNewDay] = useState(0)

  const today = new Date().getDay()

  const rows = useMemo(() => {
    return cleaners.map((c) => {
      const diff = (c.weekday - today + 7) % 7
      const nextDate = new Date(Date.now() + diff * 86400000)
      return { ...c, nextDate: nextDate.toLocaleDateString() }
    })
  }, [cleaners, today])

  const add = () => {
    setCleaners([...cleaners, { name: newName, weekday: newDay }])
    setNewName('')
  }

  return (
    <div className="space-y-4">
      <table className="min-w-full text-left">
        <thead>
          <tr>
            <th>Colaborador</th>
            <th>Dia</th>
            <th>Próxima data</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.name} className={r.weekday === today ? 'bg-green-100 dark:bg-green-900' : ''}>
              <td>{r.name}</td>
              <td>{['Dom','Seg','Ter','Qua','Qui','Sex','Sab'][r.weekday]}</td>
              <td>{r.nextDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex gap-2">
        <input value={newName} onChange={(e) => setNewName(e.target.value)} placeholder="Nome" className="border px-2" />
        <select value={newDay} onChange={(e) => setNewDay(Number(e.target.value))} className="border px-2">
          {['Dom','Seg','Ter','Qua','Qui','Sex','Sab'].map((d,i) => (
            <option key={i} value={i}>{d}</option>
          ))}
        </select>
        <button onClick={add} className="border px-3">Adicionar</button>
      </div>
    </div>
  )
}
