import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import SubHero from "../components/SubHero";
import { SlCalender } from "react-icons/sl";
import { CiUser } from "react-icons/ci";

function SinglePost() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const allPosts = JSON.parse(localStorage.getItem("blogPosts") || "[]");
    const found = allPosts.find((p) => p.slug === slug);
    if (found) setPost(found);

    const savedReplies = JSON.parse(
      localStorage.getItem(`comments-${slug}`) || "[]"
    );
    setComments(savedReplies);
  }, [slug]);

  const handleReply = (e) => {
    e.preventDefault();
    if (!name || !message) return alert("Fill all fields");

    const newComment = {
      id: Date.now(),
      name,
      message,
      date: new Date().toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
    };

    const updated = [newComment, ...comments];
    localStorage.setItem(`comments-${slug}`, JSON.stringify(updated));
    setComments(updated);
    setName("");
    setMessage("");
  };

  if (!post) return <div className="p-6">Post not found.</div>;

  return (
    <>
      <SubHero text={post.title} />

      <div className="p-6 max-w-4xl mx-auto text-white">
        <div className="flex items-center justify-start">
          <p className="flex items-center p-1 text-sm">
            <SlCalender className="mr-3 text-sm font-semibold text-[#bc963f]" />
            {post.date}
          </p>
          <p className="flex items-center p-1 mx-3 text-sm">
            <CiUser className="mx-2 text-lg font-semibold text-[#bc963f]" />
            By {post.author}
          </p>
        </div>

        <h1 className="text-3xl p-4 font-bold my-4 border-b border-gray-700">
          {post.title}
        </h1>

        <div
          className="prose prose-invert max-w-none mb-8"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        <hr className="my-6 border-gray-700" />

        <h2 className="text-2xl font-semibold mb-4">Leave a Reply</h2>
        <form onSubmit={handleReply} className="space-y-4 mb-8">
          <input
            type="text"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 border border-gray-600 rounded"
          />
          <textarea
            placeholder="Your message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full p-2 border border-gray-600 rounded"
            rows={4}
          ></textarea>
          <button
            type="submit"
            className="px-4 py-2 bg-[#bc963f] rounded cursor-pointer"
          >
            Post Comment
          </button>
        </form>

        {comments.length > 0 && (
          <div>
            <h2 className="text-xl font-semibold mb-4">Replies</h2>
            <div className="space-y-4">
              {comments.map((c) => (
                <div
                  key={c.id}
                  className="p-4 bg-[#333333] border border-gray-700 rounded"
                >
                  <p className="text-sm text-gray-400 mb-1">
                    {c.name} on {c.date}
                  </p>
                  <p>{c.message}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default SinglePost;
