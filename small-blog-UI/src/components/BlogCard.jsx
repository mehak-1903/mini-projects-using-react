import React from "react"
import { Link } from "react-router-dom"

function BlogCard({post}) {
  return (
    <div className="bg-gray-900 p-6 rounded-lg shadow-md text-white max-w-md mx-auto mb-6">
      <h2 className="text-2xl font-bold mb-2">
        <Link to={`/post/${post.id}`} className="hover:underline">{post.title}</Link>
      </h2>
      <p className="text-gray-400 text-sm mb-4">By {post.author} | {new Date(post.date).toLocaleDateString()}</p>
      <p className="text-gray-300">{post.body.substring(0, 100)}</p>
    </div>
  )
}

export default BlogCard