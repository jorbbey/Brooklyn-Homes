import React, { useEffect, useState } from "react";
import TiptapEditor from "./TipTapEditor";

const BlogPosts = () => {
  const [posts, setPosts] = useState([]);

  // Load from localStorage on mount
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("blogPosts")) || [];
    setPosts(saved);
  }, []);

  // Save the post to localStorage
  const handleSave = (newPost) => {
    const post = {
      ...newPost,
      id: Date.now(), // unique ID for the post
      createdAt: new Date().toLocaleString(), // time of creation
    };

    const updated = [post, ...posts];
    setPosts(updated);
    localStorage.setItem("blogPosts", JSON.stringify(updated));
  };

  // Delete the post from localStorage and state
  const handleDelete = (postId) => {
    const updatedPosts = posts.filter((post) => post.id !== postId); // Remove the post by ID
    setPosts(updatedPosts);
    localStorage.setItem("blogPosts", JSON.stringify(updatedPosts)); // Save the updated list to localStorage
  };

  return (
    <div className="p-4 text-white">
      <h1 className="text-2xl font-bold mb-4">Create a Blog Post</h1>
      <TiptapEditor onSave={handleSave} />

      <hr className="my-6" />

      <h2 className="text-xl font-semibold mb-2">Saved Posts</h2>
      <div className="space-y-4">
        {posts.map((post) => (
          <div key={post.id} className="border p-4 rounded shadow">
            <h3 className="text-lg font-bold">{post.title}</h3>
            <p className="text-sm text-gray-500 mb-2">{post.createdAt}</p>
            <div dangerouslySetInnerHTML={{ __html: post.content }} />

            {/* Delete Button */}
            <button
              onClick={() => handleDelete(post.id)}
              className="bg-red-600 text-white px-3 py-1 mt-2 rounded hover:bg-red-700"
            >
              Delete Post
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPosts;
