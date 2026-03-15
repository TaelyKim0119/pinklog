import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Community from './pages/Community'
import FactCheck from './pages/FactCheck'
import Care from './pages/Care'
import Shop from './pages/Shop'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="community" element={<Community />} />
        <Route path="factcheck" element={<FactCheck />} />
        <Route path="care" element={<Care />} />
        <Route path="shop" element={<Shop />} />
      </Route>
    </Routes>
  )
}

export default App
