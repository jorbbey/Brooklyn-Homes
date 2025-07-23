import React, { useEffect, useState, useContext } from "react";
import { BackgroundContext } from "../components/BackgroundContext";
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
import whiteLogo from "../assets/logo2.jpg";
import blackLogo from "../assets/logo3.png";

const storage = getStorage();

export default function AdminEditor() {
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [author, setAuthor] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [posts, setPosts] = useState([]);
  const [editorContent, setEditorContent] = useState("");
  const [isUploading, setIsUploading] = useState(false);
  const [featuredImage, setFeaturedImage] = useState(null);

  const { isDark } = useContext(BackgroundContext);

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
    setFeaturedImage(null);
  };

  const handleSave = async () => {
    if (!title || !summary || !author || !editorContent) {
      alert("Please fill in all fields.");
      return;
    }

    // Use the featuredImage state if available, otherwise extract from content
    const imageSrc =
      featuredImage || extractFirstImageFromContent(editorContent);

    const newPost = {
      title,
      slug: slugify(title),
      summary,
      content: editorContent,
      author,
      date: new Date().toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
      replies: [],
      image: imageSrc, // Now properly sets the image URL (or null if none)
    };

    try {
      if (editingId) {
        await updateDoc(doc(db, "posts", editingId), newPost);
      } else {
        await addDoc(collection(db, "posts"), newPost);
      }
      resetForm();
      // Refresh posts list
      const snapshot = await getDocs(collection(db, "posts"));
      setPosts(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    } catch (err) {
      console.error("Failed to save post:", err);
      alert("Failed to save post. Check console for details.");
    }
  };

  // Helper function to extract the first image URL from HTML content
  const extractFirstImageFromContent = (html) => {
    const doc = new DOMParser().parseFromString(html, "text/html");
    const img = doc.querySelector("img");
    return img ? img.getAttribute("src") : null;
  };

  const handleEdit = (post) => {
    setTitle(post.title);
    setSummary(post.summary);
    setAuthor(post.author);
    setEditorContent(post.content);
    setEditingId(post.id);
    setFeaturedImage(post.image || null);
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
      const url = await getDownloadURL(snapshot.ref);
      return url; // Returns the public URL of the uploaded image
    } catch (error) {
      console.error("Upload error:", error);
      return null;
    }
  };

  const handleFeaturedImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setIsUploading(true);
    try {
      const imageUrl = await uploadImageToFirebase(file);
      if (imageUrl) {
        setFeaturedImage(imageUrl); // This will be used in handleSave
      }
    } catch (error) {
      console.error("Upload failed:", error);
      alert("Image upload failed");
    } finally {
      setIsUploading(false);
    }
  };

  const handleEditorImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setIsUploading(true);
    try {
      const imageUrl = await uploadImageToFirebase(file);
      if (imageUrl) {
        setEditorContent(
          (prev) =>
            `${prev}<img src="${imageUrl}" alt="Uploaded Image" style="max-width: 100%; height: auto;" />`
        );
      }
    } catch (error) {
      console.error("Error uploading editor image:", error);
      alert("Failed to upload image");
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div
      className={
        isDark
          ? "bg-black text-white p-5 md:p-10 lg:p-20"
          : "bg-white text-black p-5 md:p-10 lg:p-20"
      }
    >
      <div className="flex justify-center items-center mb-10">
        <img src={isDark ? blackLogo : whiteLogo} alt="brooklynhomes-logo" className="w-32 md:w-36 lg:w-40" />
      </div>
      <h1 className="text-2xl font-bold mb-10 m-auto text-center">
        Brooklyn Homes Blog Editor 📝{" "}
      </h1>
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

      <div className="mb-4">
        <label className="block mb-2 font-semibold">Featured Image</label>
        {featuredImage && (
          <div className="mb-2">
            <img
              src={featuredImage}
              alt="Featured"
              className="max-w-xs max-h-40 object-contain border rounded"
            />
            <button
              onClick={() => setFeaturedImage(null)}
              className="ml-2 text-red-500"
            >
              Remove
            </button>
          </div>
        )}
        <label className="btn cursor-pointer mb-3 block">
          {isUploading ? "Uploading..." : "📷 Upload Featured Image"}
          <input
            type="file"
            accept="image/*"
            onChange={handleFeaturedImageUpload}
            disabled={isUploading}
            hidden
          />
        </label>
      </div>

      <div className="mb-4">
        <label className="btn cursor-pointer mb-3 block">
          {isUploading ? "Uploading..." : "📷 Insert Image in Content"}
          <input
            type="file"
            accept="image/*"
            onChange={handleEditorImageUpload}
            disabled={isUploading}
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
            "undo redo | formatselect | bold italic underline | link image | bullist numlist | removeformat",
          images_upload_handler: async (blobInfo, success, failure) => {
            try {
              setIsUploading(true);
              const file = blobInfo.blob();
              const url = await uploadImageToFirebase(file);
              if (url) {
                success(url);
              } else {
                failure("Upload failed");
              }
            } catch (error) {
              console.error("Upload error:", error);
              failure("Image upload failed");
            } finally {
              setIsUploading(false);
            }
          },
          content_style:
            "body { font-family: Arial, sans-serif; font-size: 14px }",
        }}
        onEditorChange={(newContent) => setEditorContent(newContent)}
      />

      <button
        onClick={handleSave}
        disabled={isUploading}
        className={`px-4 py-2 my-5 rounded ${
          isUploading ? "bg-gray-400" : "bg-[#cf9a1e] hover:bg-yellow-600"
        }`}
      >
        {editingId ? "Update" : "Save"} Post
      </button>

      <h2 className="text-xl font-semibold mb-2">All Posts</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {posts.map((post) => (
          <div key={post.id} className="border p-3 rounded mb-3">
            {post.image && (
              <img
                src={post.image}
                alt="Post thumbnail"
                className="max-w-2xl max-h-58 md:max-h-68 mt-2 object-contain"
              />
            )}
            <h3 className="font-bold mt-5">{post.title}</h3>
            <p className="text-sm text-gray-400 my-2">{post.summary}</p>

            <div className="mt-5 flex gap-2">
              <button
                onClick={() => handleEdit(post)}
                className="bg-yellow-500 text-black px-2 py-1 rounded"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(post.id)}
                className="bg-red-600 text-black px-2 py-1 rounded"
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
