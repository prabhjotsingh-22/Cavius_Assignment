import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <nav className="bg-gray-400 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-3xl text-gray-200 font-bold">
          Cavius Technologies Assignment
        </Link>
      </div>
    </nav>
  )
}

export default Navbar