import { Button } from './components/ui/Button'
import './App.css'
import { Textarea } from './components/ui/textarea'
import { useState } from 'react'

function App() {
  const [message, setMessage] = useState('')
  const showAlert = (message: string) => alert(message)
  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value)
  }
  return (
    <>
      <Textarea value={message} onChange={handleTextareaChange} />
      <Button onClick={() => showAlert(message)} size={'large'} variant={'secondary'}>
        Send message
      </Button>
      <Button asChild size={'large'} variant={'outline'} className='text-red-400'>
        <a href='https://github.com/mesajil' target='_blank' rel='noopener noreferrer'>
          GitHub
        </a>
      </Button>
    </>
  )
}

export default App
