import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

const Home = () => {
  const [posts, setPosts] = useState([])
  const [searchTerm, setSearchTerm] = useState("")

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data))
  }, [])

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Blog Posts</h1>
      <input
        type="text"
        placeholder="Search posts..."
        className="w-full p-2 mb-4 border rounded"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredPosts.map((post) => (
          <Link
            key={post.id}
            to={`/post/${post.id}`}
            className="bg-white p-4 rounded shadow hover:shadow-md transition-shadow"
          >
            <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
            <p className="text-gray-600">{post.body.slice(0, 100)}...</p>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Home
