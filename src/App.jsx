import { useState } from 'react'

import './App.css'
import SeconnectersInscrire from './componenets/SeconnectersInscrire/SeconnectersInscrire'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      
<SeconnectersInscrire/>
    </div>
  )
}

export default App
