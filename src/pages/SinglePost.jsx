import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs, doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase";
import { SlCalender } from "react-icons/sl";
import { CiUser } from "react-icons/ci";
import SubHero from "../components/SubHero";
import SEO from '../components/SEO'

function SinglePost() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [reply, setReply] = useState("");

  useEffect(() => {
    const fetchPost = async () => {
      const querySnapshot = await getDocs(collection(db, "posts"));
      const foundPost = querySnapshot.docs
        .map((doc) => ({ id: doc.id, ...doc.data() }))
        .find((p) => p.slug === slug);

      if (foundPost) setPost(foundPost);
    };
    fetchPost();
  }, [slug]);

  const handleReply = async () => {
    if (!reply.trim()) return;

    const updatedReplies = [...(post.replies || []), reply];
    try {
      const postRef = doc(db, "posts", post.id);
      await updateDoc(postRef, {
        replies: updatedReplies,
      });
      setPost((prev) => ({ ...prev, replies: updatedReplies }));
      setReply("");
    } catch (err) {
      console.error("Failed to update replies:", err);
    }
  };

  if (!post) return <div className="p-6 text-white">Post not found.</div>;

  return (
    <>
      {/* SEO Component for dynamic page meta data */}
      <SEO
        title={`${post.title} | Brooklyn Homes Blog`}
        description={
          post.summary || "Read this insightful blog post on Brooklyn Homes."
        }
        keywords={`${post.title}, Brooklyn Homes blog, real estate blog, property tips, real estate insights, housing trends`}
        image={post.image || "https://brooklynhomesltd.com/homepage_seo_img.webp"}
        url={`https://brooklynhomesltd.com/blog/${slug}`}
      />

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
        <h1 className="text-3xl font-bold my-10">{post.title}</h1>
        {post.image && (
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-auto mb-4 rounded"
            loading="lazy"
          />
        )}
        <div
          className="prose prose-invert my-5"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        <div className="mt-40">
          <h3 className="text-xl mb-2 mt-10">💬 Leave a Reply</h3>
          <textarea
            placeholder="Write your reply..."
            className="w-full p-2 border border-white rounded mb-2"
            value={reply}
            onChange={(e) => setReply(e.target.value)}
          />
          <button
            onClick={handleReply}
            className="bg-[#bc963f] text-white px-4 py-2 rounded my-5 cursor-pointer"
          >
            Submit Reply
          </button>
        </div>

        {post.replies?.length > 0 && (
          <div className="mt-6">
            <h4 className="text-lg mb-2">Replies</h4>
            <ul className="space-y-2">
              {post.replies.map((r, idx) => (
                <li key={idx} className="border p-2 rounded text-gray-300">
                  {r}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
}

export default SinglePost;
