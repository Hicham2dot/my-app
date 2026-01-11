import { useEffect, useState } from 'react'
import './App.css'
import { Button } from './components/ui/button'

function App() {
  const [message, setMessage] = useState('')

  useEffect(() => {
    fetch('/api/message')
      .then((res) => {
        if (!res.ok) throw new Error('Network response was not ok')
        return res.text()  // On récupère du texte au lieu de JSON
      })
      .then((data) => {
        setMessage(data)
      })
  }, [])



  return (
    <div className='p-4'>
      <p className="font-bold">{message}</p>
      <Button>Click me </Button>
    </div>
  )
}

export default App