import React from "react"
import { Link } from "react-router-dom"

function PostCard({ post }) {
  return (
    <div className="relative group overflow-hidden text-white rounded-xl shadow-lg">

      {/* Card Content */}
      <div className="bg-slate-700 relative z-10 p-9 rounded-xl transition duration-300 group-hover:scale-102 hover:shadow-2xl cursor-pointer">

        <h2 className="text-2xl font-bold mb-2">
          <Link to={`/posts/${post.id}`} className="hover:underline group-hover:text-blue-400">{post.title}</Link>
        </h2>
        <p className="text-gray-400 text-sm mb-4">By {post.author} | {new Date(post.date).toLocaleDateString()}</p>
        <p className="text-gray-300">{post.body.substring(0, 100)}</p>
      </div>
    </div>
  )
}

export default PostCard