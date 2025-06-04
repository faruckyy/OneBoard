import { createContext, useContext, useReducer } from 'react'

export interface Task {
  id: string
  title: string
  client: string
  priority: 'Low' | 'Medium' | 'High'
  status: 'To Do' | 'Doing' | 'Done'
  dueDate?: string
}

type Action =
  | { type: 'add'; task: Task }
  | { type: 'update'; task: Task }
  | { type: 'remove'; id: string }

function reducer(state: Task[], action: Action): Task[] {
  switch (action.type) {
    case 'add':
      return [...state, action.task]
    case 'update':
      return state.map((t) => (t.id === action.task.id ? action.task : t))
    case 'remove':
      return state.filter((t) => t.id !== action.id)
    default:
      return state
  }
}

const TaskContext = createContext<{
  tasks: Task[]
  dispatch: React.Dispatch<Action>
}>({ tasks: [], dispatch: () => {} })

export const useTaskStore = () => useContext(TaskContext)

export const TaskProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [tasks, dispatch] = useReducer(reducer, [])
  return <TaskContext.Provider value={{ tasks, dispatch }}>{children}</TaskContext.Provider>
}
