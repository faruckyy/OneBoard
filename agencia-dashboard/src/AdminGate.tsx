import { useAuth } from './AuthContext'
import { useState } from 'react'

export default function AdminGate() {
  const { isAuthed, login } = useAuth()
  const [user, setUser] = useState('')
  const [pass, setPass] = useState('')

  if (!isAuthed) {
    return (
      <div className="space-y-2">
        <input value={user} onChange={e=>setUser(e.target.value)} placeholder="Usuário" className="border px-2" />
        <input type="password" value={pass} onChange={e=>setPass(e.target.value)} placeholder="Senha" className="border px-2" />
        <button onClick={() => login(user, pass)} className="border px-3">Entrar</button>
      </div>
    )
  }
  return <div>Acesso liberado</div>
}
