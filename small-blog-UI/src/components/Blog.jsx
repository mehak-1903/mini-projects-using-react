import React, { useState, useEffect } from "react";
import BlogCard from "./Blogcard";

function Blog() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/posts")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
        setLoading(false);
      })
      .catch(() => {
        setPosts([]);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-white text-center mt-10">Loading posts...</p>;
  if (posts.length === 0) return <p className="text-white text-center mt-10">No posts found.</p>;

  return (
    <div className="max-w-5xl mx-auto p-6 bg-black min-h-screen">
      {posts.map((post) => (
        <BlogCard key={post.id} post={post} />
      ))}
    </div>
  );
}

export default Blog;
