function UserCard({ user }) {
  return (
    <div className="card">
      <h3>{user.name}</h3>
      <p>{user.email}</p>
      <p>{user.company.name}</p>
    </div>
  )
}

export default UserCard
