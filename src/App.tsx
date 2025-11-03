

import Drivers from './pages/drivers.tsx'
import { BrowserRouter,Routes,Route } from "react-router-dom"
import Tracks from './pages/tracks.tsx'
import History from './pages/history.tsx'

import Hero from './pages/index.tsx'

function App() {
  return (
    <BrowserRouter>
     <Routes>
        <Route path='/' element={<Hero/>}/>
        <Route path="/drivers" element={<Drivers/>}/>
        <Route path='/tracks' element={<Tracks/>}/>
        <Route path='/history' element={<History/>}/>
        <Route/>
      </Routes>
  </BrowserRouter>
  )
}

export default App