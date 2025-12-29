import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';

function Post() {
  const [post, setPost] = useState(null);
  const { id } = useParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:5000/posts/${id}`)
      .then((res) => {
        if(!res.ok) throw new Error("Post Not Found.");
        return res.json();
      })
      .then((data) => {
        setPost(data);
        setLoading(false);
      })
      .catch((err) => {
        setPost(null);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p className='text-white text-center mt-10'>Loading...</p>
  if (!post) return <p className='text-white text-center mt-10'>Post not found...</p>

  return (
    <div className='max-w-3xl mx-auto p-6 text-white bg-black min-h-screen'>
      <h1 className='text-5xl font-bold mb-4'>{post.title}</h1>
      <p className='text-gray-400 mb-8'>By {post.author} | {new Date(post.date).toLocaleDateString()}</p>
      <div className='prose prose-invert max-w-none'>
        <p>{post.body}</p>
      </div>

    </div>
  )
}

export default Post