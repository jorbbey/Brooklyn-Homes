import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Image from "@tiptap/extension-image";
import Highlight from "@tiptap/extension-highlight";
import React, { useEffect, useState } from "react";
import { slugify } from "../utils/slugify";
import { useNavigate } from "react-router-dom";

export default function AdminEditor() {
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [posts, setPosts] = useState([]);
  const [author, setAuthor] = useState("");
  const navigate = useNavigate();

const editor = useEditor({
  extensions: [StarterKit, Image, Highlight],
  content: "",
});

  // Load saved posts on mount
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("blogPosts") || "[]");
    setPosts(saved);
  }, []);

  const saveToLocalStorage = (data) => {
    localStorage.setItem("blogPosts", JSON.stringify(data));
    setPosts(data);
  };

  const handleImageUpload = (event) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      const url = reader.result;
      editor?.chain().focus().setImage({ src: url }).run();
    };
    reader.readAsDataURL(file); // ✅ encodes image as base64 blob
  };


  
const handleSave = () => {
  if (!title || !summary || !editor?.getHTML() || !author) {
    alert("Please fill all fields");
    return;
  }

  const newPost = {
    id: editingId || Date.now(),
    title,
    slug: slugify(title),
    summary,
    content: editor.getHTML(),
    author,
    date: new Date().toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }),
  };

  let updatedPosts;
  if (editingId) {
    updatedPosts = posts.map((post) =>
      post.id === editingId ? newPost : post
    );
  } else {
    updatedPosts = [newPost, ...posts];
  }

  saveToLocalStorage(updatedPosts);
  resetForm();
};

  const resetForm = () => {
    setTitle("");
    setSummary("");
    editor.commands.setContent("");
    setEditingId(null);
  };

  const handleEdit = (post) => {
    setTitle(post.title);
    setSummary(post.summary);
    editor.commands.setContent(post.content);
    setEditingId(post.id);
  };

  const handleDelete = (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this post?"
    );
    if (!confirmed) return;

    const updated = posts.filter((post) => post.id !== id);
    saveToLocalStorage(updated);
    if (id === editingId) resetForm();
  };

  return (
    <div className="p-6 max-w-4xl mx-auto text-white">
      <h1 className="text-2xl font-bold mb-4">✍️ Blog Editor</h1>

      <input
        type="text"
        placeholder="Post Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full mb-3 p-2 border rounded"
      />

      <textarea
        placeholder="SEO Summary..."
        value={summary}
        onChange={(e) => setSummary(e.target.value)}
        className="w-full mb-3 p-2 border rounded"
      />

      <input
        type="text"
        placeholder="Author Name"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        className="p-2 border rounded w-full mb-2"
      />

      {editor && (
        <div className="flex flex-wrap gap-2 mb-4">
          <button
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 1 }).run()
            }
            className={
              editor.isActive("heading", { level: 1 })
                ? "bg-blue-500 text-white px-2 py-1 rounded"
                : "bg-gray-200 text-black px-2 py-1 rounded"
            }
          >
            H1
          </button>
          <button
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 2 }).run()
            }
            className={
              editor.isActive("heading", { level: 2 })
                ? "bg-blue-500 text-white px-2 py-1 rounded"
                : "bg-gray-200 text-black px-2 py-1 rounded"
            }
          >
            H2
          </button>

          <button
            onClick={() => editor.chain().focus().toggleBold().run()}
            className={
              editor.isActive("bold")
                ? "bg-blue-500 text-white px-2 py-1 rounded"
                : "bg-gray-200 text-black px-2 py-1 rounded"
            }
          >
            Bold
          </button>
          <button
            onClick={() => editor.chain().focus().toggleItalic().run()}
            className={
              editor.isActive("italic")
                ? "bg-blue-500 text-white px-2 py-1 rounded"
                : "bg-gray-200 text-black px-2 py-1 rounded"
            }
          >
            Italic
          </button>
          <button
            onClick={() => editor.chain().focus().toggleHighlight().run()}
            className={
              editor.isActive("highlight")
                ? "bg-yellow-500 text-white px-2 py-1 rounded"
                : "bg-gray-200 text-black px-2 py-1 rounded"
            }
          >
            Highlight
          </button>
          <button
            onClick={() => editor.chain().focus().toggleBulletList().run()}
            className={
              editor.isActive("bulletList")
                ? "bg-blue-500 text-white px-2 py-1 rounded"
                : "bg-gray-200 text-black px-2 py-1 rounded"
            }
          >
            • List
          </button>
          <button
            onClick={() => editor.chain().focus().toggleOrderedList().run()}
            className={
              editor.isActive("orderedList")
                ? "bg-blue-500 text-white px-2 py-1 rounded"
                : "bg-gray-200 text-black px-2 py-1 rounded"
            }
          >
            1. List
          </button>
          <button
            onClick={() => editor.chain().focus().toggleBlockquote().run()}
            className={
              editor.isActive("blockquote")
                ? "bg-blue-500 text-white px-2 py-1 rounded"
                : "bg-gray-200 text-black px-2 py-1 rounded"
            }
          >
            Blockquote
          </button>
          <button
            onClick={() => editor.chain().focus().undo().run()}
            className="bg-gray-200 text-black px-2 py-1 rounded"
          >
            Undo
          </button>
          <button
            onClick={() => editor.chain().focus().redo().run()}
            className="bg-gray-200 text-black px-2 py-1 rounded"
          >
            Redo
          </button>
        </div>
      )}

      <EditorContent
        editor={editor}
        className="border border-white p-3 rounded mb-4 min-h-[200px]"
      />

      <div className="mb-4">
        <button
          onClick={() => document.getElementById("image-upload").click()}
          className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700"
        >
          Upload Image
        </button>
        <input
          type="file"
          id="image-upload"
          accept="image/*"
          onChange={handleImageUpload}
          className="hidden"
        />
      </div>

      <button
        onClick={handleSave}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        {editingId ? "Update Post" : "Save Post"}
      </button>

      {/* POSTS LIST */}
      <div className="mt-10">
        <h2 className="text-xl font-semibold mb-2">📚 All Posts</h2>
        {posts.length === 0 && <p>No posts yet.</p>}
        {posts.map((post) => (
          <div
            key={post.id}
            className="border p-3 rounded mb-3 flex justify-between items-center"
          >
            <div>
              <h3 className="font-semibold">{post.title}</h3>
              <p className="text-sm text-gray-500">{post.summary}</p>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => handleEdit(post)}
                className="bg-yellow-500 text-white px-2 py-1 rounded text-sm"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(post.id)}
                className="bg-red-600 text-white px-2 py-1 rounded text-sm"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
