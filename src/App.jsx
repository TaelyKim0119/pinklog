import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Community from './pages/Community'
import FactCheck from './pages/FactCheck'
import Care from './pages/Care'
import Shop from './pages/Shop'
import Login from './pages/Login'
import Diary from './pages/Diary'
import Consult from './pages/Consult'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="community" element={<Community />} />
        <Route path="factcheck" element={<FactCheck />} />
        <Route path="care" element={<Care />} />
        <Route path="shop" element={<Shop />} />
        <Route path="login" element={<Login />} />
        <Route path="diary" element={<Diary />} />
        <Route path="consult" element={<Consult />} />
      </Route>
    </Routes>
  )
}

export default App
