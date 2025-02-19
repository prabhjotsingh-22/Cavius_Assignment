import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from "./components/Home"
import PostDetails from "./components/PostDetails"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <div className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/post/:id" element={<PostDetails />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  )
}

export default App

