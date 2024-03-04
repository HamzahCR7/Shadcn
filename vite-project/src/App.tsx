import { useState } from 'react'
import './App.css'
import  {Button, buttonVariants } from './components/ui/button'
import { Link } from 'react-router-dom';
import { ChevronRight, Mail,Loader2  } from "lucide-react"
import ContactDetails from './Contact-Details';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <div>
      <Button onClick={()=>window.alert('clicked')} variant="default">Click Here</Button>
      <Button onClick={()=>window.alert('clicked')} variant="destructive">Click Here</Button>
      <Button onClick={()=>window.alert('clicked')} variant="outline">Click Here</Button>
      <Button variant="outline" size="icon">
      <ChevronRight className="h-4 w-4" />
    </Button>

      </div>
      <div>
      <Button>
      <Mail className="mr-2 h-4 w-4" /> Login with Email
    </Button>
      </div>
      <div><Button disabled>
      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
      Please wait
    </Button></div>
      <div>
      {/* <Link className={buttonVariants({ variant: "outline" })} to='/'>Click here</Link> */}

      {/* </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      // </div> */}
      <ContactDetails/>
    </>
  )
}

export default App
