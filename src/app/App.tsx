import { Button } from '../components/ui/Button'
import './App.css'

function App() {
  return (
    <>
      <Button label='My Default Button'></Button>
      <Button label='My Big Button' size={'large'} variant={'secondary'}></Button>
      <Button label='My Small Button' size={'small'} variant={'outline'}></Button>
    </>
  )
}

export default App
