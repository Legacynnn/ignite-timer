import { BrowserRouter } from 'react-router-dom'
import { CyclesContextProvider } from './context/CycleContext'
import { Router } from './Router'

export function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <CyclesContextProvider>
          <Router />
        </CyclesContextProvider>
      </BrowserRouter>
    </div>
  )
}
