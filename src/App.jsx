import Navbar from './components/Navbar'
import Hero from './components/Hero'
import './App.css'
import Contact from './components/Contact'

function App() {
  return (
    <>
      <Navbar />
      <div className="page-body">
        <div className="content-wrap">
          <Hero />
          <Contact />
        </div>
      </div>
    </>
  )
}

export default App
