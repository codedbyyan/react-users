import { useEffect, useState } from 'react'
import UserCard from './components/UserCard'
import './index.css'
import { getUsers } from './services/api'

function App() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    getUsers().then(data => setUsers(data))
  }, [])

  return (
    <div style={{ padding: '20px' }}>
      <h1>Lista de Usuários</h1>

      <div className="card-grid">
        {users.map(user => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  )
}

export default App
