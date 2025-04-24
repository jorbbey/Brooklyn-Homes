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


const storage = getStorage(); // Firebase Storage init

export default function AdminEditor() {
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [author, setAuthor] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [posts, setPosts] = useState([]);
  const [editorContent, setEditorContent] = useState("");

  // Fetch posts
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

    // Try to extract the first image src (if any) from the contentHTML
    const imageUrlMatch = contentHTML.match(/<img [^>]*src="([^"]+)"[^>]*>/);
    const imageSrc = imageUrlMatch ? imageUrlMatch[1] : null;
    console.log("Extracted image URL:", imageSrc); // Debug log

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
      image: imageSrc, // Will be null if no image is found
    };

    try {
      if (editingId) {
        const ref = doc(db, "posts", editingId);
        await updateDoc(ref, newPost);
      } else {
        await addDoc(collection(db, "posts"), newPost);
      }

      // Refresh list
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

  // Reusable function to upload image to Firebase Storage
  const uploadImageToFirebase = async (file) => {
    if (!file) return null;

    // Create a storage reference with a unique name
    const fileName = `${Date.now()}_${file.name}`;
    const storageRef = ref(storage, `images/${fileName}`);

    try {
      const snapshot = await uploadBytes(storageRef, file);
      const imageUrl = await getDownloadURL(snapshot.ref);
      console.log("Image uploaded successfully, URL:", imageUrl); // Debug log
      return imageUrl;
    } catch (error) {
      console.error("Error uploading image: ", error);
      throw new Error("Image upload failed");
    }
  };

  // Handle image upload for manual input
  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    try {
      const imageUrl = await uploadImageToFirebase(file);
      if (imageUrl) {
        setEditorContent((prevContent) => {
          const updatedContent = `${prevContent}<img src="${imageUrl}" alt="Uploaded Image" />`;
          console.log("Updated editor content with image:", updatedContent); // Debug log
          return updatedContent;
        });
      }
    } catch (error) {
      console.error("Image upload error:", error);
      alert("Failed to upload image.");
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

      <div className="flex flex-wrap gap-2 mb-2">
        <label className="btn cursor-pointer">
          📷 Image
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            hidden
          />
        </label>
      </div>

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
            "undo redo | bold italic underline strikethrough | link image | bullist numlist | outdent indent | removeformat",
          images_upload_handler: async (blobInfo, success, failure) => {
            try {
              const file = blobInfo.blob();
              const imageUrl = await uploadImageToFirebase(file);
              if (imageUrl) {
                console.log("TinyMCE image upload success, URL:", imageUrl); // Debug log
                success(imageUrl);
              } else {
                failure("Image upload failed");
              }
            } catch (error) {
              console.error("TinyMCE image upload error:", error);
              failure("Image upload failed: " + error.message);
            }
          },
        }}
        onEditorChange={(newContent) => {
          console.log("Editor content updated:", newContent); // Debug log
          setEditorContent(newContent);
        }}
      />

      <button
        onClick={handleSave}
        className="bg-[#bc963f] text-white px-4 py-2 my-5 cursor-pointer rounded hover:bg-blue-700"
      >
        {editingId ? "Update" : "Save"} Post
      </button>

      <hr className="my-6" />

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
