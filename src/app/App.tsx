import { Button } from '../components/ui/Button'
import './App.css'

function App() {
  const hello = () => alert('Hello World!')
  return (
    <>
      <Button onClick={hello}>My Default Button</Button>
      <Button onClick={hello} size={'large'} variant={'secondary'}>
        My Big Button
      </Button>
      <Button onClick={hello} size={'small'} variant={'outline'} className='text-red-400'>
        My Outline Button
      </Button>
    </>
  )
}

export default App
