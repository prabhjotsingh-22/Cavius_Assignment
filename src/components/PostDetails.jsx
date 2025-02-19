import { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"

const PostDetails = () => {
  const [post, setPost] = useState(null)
  const { id } = useParams()

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => response.json())
      .then((data) => setPost(data))
  }, [id])

  if (!post) {
    return <div>Loading...</div>
  }

  return (
    <div className="bg-white p-6 rounded shadow">
      <Link to="/" className="text-blue-600 hover:underline mb-4 inline-block">
        &larr; Back to Posts
      </Link>
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-700">{post.body}</p>
    </div>
  )
}

export default PostDetails
