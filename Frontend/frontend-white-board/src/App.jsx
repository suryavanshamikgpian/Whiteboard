import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './Components/Home'
import HostSpace from './Components/HostSpace'
import CreateWorkspace from './Components/CreateWorkspace'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/host" element={<HostSpace />} />
      <Route path="/create" element={<CreateWorkspace />} />
    </Routes>
  )
}
