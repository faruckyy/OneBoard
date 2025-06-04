import { ThemeProvider } from './ThemeProvider'
import { AuthProvider } from './AuthContext'
import { TaskProvider } from './useTaskStore'
import AppRouter from './router'

export default function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <TaskProvider>
          <AppRouter />
        </TaskProvider>
      </AuthProvider>
    </ThemeProvider>
  )
}
