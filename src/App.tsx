import { Button } from './components/ui/Button'
import './App.css'
import { Textarea } from './components/ui/textarea'

function App() {
  const hello = () => alert('Hello World!')
  return (
    <>
      <Textarea />
      <Button onClick={hello}>My Default Button</Button>
      <Button onClick={hello} size={'large'} variant={'secondary'}>
        My Big Button
      </Button>
      <Button size={'small'} variant={'outline'} className='text-red-400'>
        My Outline Button
      </Button>
      <Button asChild size={'large'} variant={'outline'}>
        <a href='https://github.com/mesajil' target='_blank' rel='noopener noreferrer'>
          GitHub
        </a>
      </Button>
    </>
  )
}

export default App
