import React, { useState, useEffect } from "react";
import PostCard from "../components/PostCard";
import { Link, useParams } from "react-router-dom";

function PostDetail() {
  const [posts, setPosts] = useState(null);
  const [loading, setLoading] = useState(true);
  const {id} = useParams();

  useEffect(() => {
    fetch(`http://localhost:5000/posts/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
        setLoading(false);
      })
      .catch(() => {
        setPosts(null);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p className="text-white text-center mt-10">Loading posts...</p>;
  if (posts.length === 0) return <p className="text-white text-center mt-10">No posts found.</p>;

  return (
    <div className="min-h-screen bg-black text-white p-10">
        <div className="max-w-5xl mx-auto p-8 bg-gray-900 rounded-xl shadow-lg">
        <h1 className="text-3xl font-bold mb-4">{posts.title}</h1>
        <p className="text-gray-400 text-sm mb-4">By {posts.author} | {new Date(posts.date).toLocaleDateString()}</p>
        <p className="text-gray-300 leading-relaxed mb-8">{posts.body}</p>
        <Link to="/posts" className="inline-block text-blue-400 hover:underline">Back to posts.</Link>
        </div>
    </div>
  );
}

export default PostDetail;
