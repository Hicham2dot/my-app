import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    fetch('/api/message')
      .then((res) => {
        if (!res.ok) throw new Error('Network response was not ok')
        return res.text()  // On récupère du texte au lieu de JSON
      })
      .then((data) => {
        setMessage(data)
        setLoading(false)
      })
      .catch((err) => {
        setError(err.message)
        setLoading(false)
      })
  }, [])

  if (loading) return <p >Chargement...</p>
  if (error) return <p>Erreur: {error}</p>

  return (
    <div>
      <h1 className="text-2xl font-bold">Mon Application Full Stack</h1>
      <p className="font-bold">{message}</p>
    </div>
  )
}

export default App