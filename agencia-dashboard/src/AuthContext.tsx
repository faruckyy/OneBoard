import { createContext, useContext, useState } from 'react'

interface AuthState {
  isAuthed: boolean
  login: (user: string, pass: string) => boolean
}

const AuthContext = createContext<AuthState>({
  isAuthed: false,
  login: () => false,
})

export const useAuth = () => useContext(AuthContext)

export const AuthProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
  const [isAuthed, setIsAuthed] = useState(false)

  const login = (user: string, pass: string) => {
    if (user === 'admin' && pass === 'admin') {
      setIsAuthed(true)
      return true
    }
    return false
  }

  return (
    <AuthContext.Provider value={{ isAuthed, login }}>
      {children}
    </AuthContext.Provider>
  )
}
