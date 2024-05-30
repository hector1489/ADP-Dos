import { BrowserRouter, Routes, Route } from "react-router-dom"
import { DataContextProvider } from './context/DataContext'
import { Footer, NavBar } from './components/index'
import { Home, Contact, Us, News } from './views/index'
import './App.css'

function App() {
  return (
    <DataContextProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="us" element={<Us />} />
          <Route path="news" element={<News />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </DataContextProvider>
  )
}

export default App
