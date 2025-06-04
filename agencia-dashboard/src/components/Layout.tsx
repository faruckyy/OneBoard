import { Link, Outlet, useMatches } from '@tanstack/react-router'
import { Home, PenTool, Brush, Cog, CalendarDays, Link as LinkIcon, Shield } from 'lucide-react'
import { useTheme } from '../ThemeProvider'
import { useAuth } from '../AuthContext'

const menu = [
  { to: '/', label: 'Limpeza', icon: Home },
  { to: '/design', label: 'Designers', icon: PenTool },
  { to: '/social', label: 'Social Media', icon: Brush },
  { to: '/ops', label: 'Operacional', icon: Cog },
  { to: '/calendar', label: 'Calendário', icon: CalendarDays },
  { to: '/links', label: 'Links úteis', icon: LinkIcon },
]

export default function Layout() {
const matches = useMatches();
  const last = matches[matches.length - 1];
  const title = menu.find(m => m.to === last.pathname)?.label || "Dashboard";
  const { toggleTheme } = useTheme()
  const { isAuthed } = useAuth()
  return (
    <div className="flex h-full text-sm font-sans">
      <aside className="w-48 border-r border-zinc-200 dark:border-zinc-700 p-4 space-y-2">
        {menu.map((m) => (
          <Link
            key={m.to}
            to={m.to}
            className="flex items-center gap-2 p-2 rounded hover:bg-zinc-100 dark:hover:bg-zinc-800"
          >
            <m.icon size={16} /> {m.label}
          </Link>
        ))}
        {isAuthed && (
          <Link to="/admin" className="flex items-center gap-2 p-2 rounded hover:bg-zinc-100 dark:hover:bg-zinc-800">
            <Shield size={16} /> Admin
          </Link>
        )}
      </aside>
      <div className="flex-1 flex flex-col">
        <header className="flex items-center justify-between p-4 border-b border-zinc-200 dark:border-zinc-700">
          <h1 className="text-lg font-semibold">{title}</h1>
          <div className="flex items-center gap-4">
            <button onClick={toggleTheme} className="px-2 py-1 rounded border">Switch</button>
            <div className="w-8 h-8 bg-zinc-300 rounded-full" />
          </div>
        </header>
        <main className="p-4 flex-1 overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
