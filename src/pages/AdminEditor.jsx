import React, { useEffect, useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
import {
  collection,
  addDoc,
  getDocs,
  updateDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "../firebase";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { slugify } from "../utils/slugify";

const storage = getStorage();

export default function AdminEditor() {
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [author, setAuthor] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [posts, setPosts] = useState([]);
  const [editorContent, setEditorContent] = useState("");

  useEffect(() => {
    const fetchPosts = async () => {
      const querySnapshot = await getDocs(collection(db, "posts"));
      const allPosts = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setPosts(allPosts);
    };
    fetchPosts();
  }, []);

  const resetForm = () => {
    setTitle("");
    setSummary("");
    setAuthor("");
    setEditorContent("");
    setEditingId(null);
  };

  const handleSave = async () => {
    if (!title || !summary || !author || !editorContent) {
      alert("Please fill in all fields.");
      return;
    }

    const contentHTML = editorContent;
    const imageUrlMatch = contentHTML.match(/<img [^>]*src=\"([^\"]+)\"[^>]*>/);
    const imageSrc = imageUrlMatch ? imageUrlMatch[1] : null;

    const newPost = {
      title,
      slug: slugify(title),
      summary,
      content: contentHTML,
      author,
      date: new Date().toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
      replies: [],
      image: imageSrc,
    };

    try {
      if (editingId) {
        await updateDoc(doc(db, "posts", editingId), newPost);
      } else {
        await addDoc(collection(db, "posts"), newPost);
      }
      const snapshot = await getDocs(collection(db, "posts"));
      const allPosts = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setPosts(allPosts);
      resetForm();
    } catch (err) {
      console.error("Failed to save post:", err);
      alert("Failed to save post. Check the console for details.");
    }
  };

  const handleEdit = (post) => {
    setTitle(post.title);
    setSummary(post.summary);
    setAuthor(post.author);
    setEditorContent(post.content);
    setEditingId(post.id);
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this post?")) return;
    await deleteDoc(doc(db, "posts", id));
    setPosts(posts.filter((p) => p.id !== id));
  };

  const uploadImageToFirebase = async (file) => {
    const fileName = `${Date.now()}_${file.name}`;
    const storageRef = ref(storage, `images/${fileName}`);
    try {
      const snapshot = await uploadBytes(storageRef, file);
      return await getDownloadURL(snapshot.ref);
    } catch (error) {
      console.error("Image upload error:", error);
      return null;
    }
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    const imageUrl = await uploadImageToFirebase(file);
    if (imageUrl) {
      setEditorContent(
        (prev) => `${prev}<img src=\"${imageUrl}\" alt=\"Uploaded Image\" />`
      );
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto text-white">
      <h1 className="text-2xl font-bold mb-4">📝 Blog Editor</h1>
      <input
        className="w-full p-2 border mb-3 rounded"
        placeholder="Post Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        className="w-full p-2 border mb-3 rounded"
        placeholder="Post Summary"
        value={summary}
        onChange={(e) => setSummary(e.target.value)}
      />
      <input
        className="w-full p-2 border mb-3 rounded"
        placeholder="Author Name"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />

      <label className="btn cursor-pointer mb-3 block">
        📷 Upload Image
        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          hidden
        />
      </label>

      <Editor
        apiKey="xzeym30ltxk21e61m38lor51lvnq4ocxa2y0np4wwyddskeg"
        value={editorContent}
        init={{
          height: 500,
          menubar: false,
          plugins: [
            "advlist autolink lists link image charmap print preview anchor",
            "searchreplace visualblocks code fullscreen",
            "insertdatetime media table paste code help wordcount",
          ],
          toolbar:
            "undo redo | bold italic underline | link image | bullist numlist | removeformat",
          images_upload_handler: async (blobInfo, success, failure) => {
            const file = blobInfo.blob();
            const url = await uploadImageToFirebase(file);
            if (url) success(url);
            else failure("Upload failed");
          },
        }}
        onEditorChange={(newContent) => setEditorContent(newContent)}
      />

      <button
        onClick={handleSave}
        className="bg-[#bc963f] px-4 py-2 my-5 rounded hover:bg-yellow-600"
      >
        {editingId ? "Update" : "Save"} Post
      </button>

      <h2 className="text-xl font-semibold mb-2">All Posts</h2>
      {posts.map((post) => (
        <div key={post.id} className="border p-3 rounded mb-3">
          <h3 className="font-bold">{post.title}</h3>
          <p className="text-sm text-gray-400">{post.summary}</p>
          <div className="mt-2 flex gap-2">
            <button
              onClick={() => handleEdit(post)}
              className="bg-yellow-500 text-white px-2 py-1 rounded"
            >
              Edit
            </button>
            <button
              onClick={() => handleDelete(post.id)}
              className="bg-red-600 text-white px-2 py-1 rounded"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
