import React, { useEffect, useState, useContext } from "react";
import { useActionData, useParams } from "react-router-dom";
import { collection, getDocs, doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase";
import { SlCalender } from "react-icons/sl";
import { CiUser } from "react-icons/ci";
import { BackgroundContext } from "../components/BackgroundContext";
import SEO from "../components/SEO";
import BlogSidebar from "../components/BlogSidebar";
import BlogHero from "../components/BlogHero";
import { FaArrowRightLong } from "react-icons/fa6";
import newRoadImage from "../../public/blog-posts/new-roads2.jpg"; 
import landOwnerImage from "../../public/blog-posts/land-owner.jpg";
import smartHomeImage from "../../public/blog-posts/smarthome2.jpg";
import walkableImage from "../../public/blog-posts/walkable-city.jpg";
import techTransformImage from "../../public/blog-posts/tech-transform.jpg"

function SinglePost() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [allPosts, setAllPosts] = useState([]); // Store all posts
  const [filteredPosts, setFilteredPosts] = useState([]); // Store filtered posts
  const [reply, setReply] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");

  const {isDark} = useContext(BackgroundContext)

  useEffect(() => {
    const fetchPosts = async () => {
      const querySnapshot = await getDocs(collection(db, "posts"));
      const postsData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setAllPosts(postsData);
      setFilteredPosts(postsData); // Initially, all posts are shown

      // Find the specific post for this page
      const foundPost = postsData.find((p) => p.slug === slug);
      if (foundPost) {
        setPost(foundPost);
      } else {
        setPost(false); // Set to false to indicate post not found after loading
      }
    };
    fetchPosts();
  }, [slug]);

  const handleReply = async (e) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !reply.trim()) return;

    const newReply = { name, email, website, message: reply };
    const updatedReplies = [...(post.replies || []), newReply];
    try {
      const postRef = doc(db, "posts", post.id);
      await updateDoc(postRef, {
        replies: updatedReplies,
      });
      setPost((prev) => ({ ...prev, replies: updatedReplies }));
      setReply("");
      setName("");
      setEmail("");
      setWebsite("");
    } catch (err) {
      console.error("Failed to update replies:", err);
    }
  };

  if (post === null) {
    return (
      <div
        className={
          isDark
            ? "flex flex-col items-center justify-center min-h-screen bg-black text-white"
            : "flex flex-col items-center justify-center min-h-screen bg-white text-black"
        }
      >
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-[#cf9a1e] border-solid mb-4"></div>
        <p className="text-lg">Loading post...</p>
      </div>
    );
  }

  if (post === false) {
    return (
      <div
        className={
          isDark
            ? "flex flex-col items-center justify-center min-h-screen bg-black text-white"
            : "flex flex-col items-center justify-center min-h-screen bg-white text-black"
        }
      >
        <p className="text-lg">Oops! This post couldn’t be found.</p>
        <a href="/blog" className="mt-4 text-[#cf9a1e] hover:underline">
          Back to Blog
        </a>
      </div>
    );
  }

 let postImage;
 post.title.includes("New Road")
   ? (postImage = newRoadImage)
   : post.title.includes("Ownership")
   ? (postImage = landOwnerImage)
   : post.title.includes("Smart Home")
   ? (postImage = smartHomeImage)
   : post.title.includes("Technology")
   ? (postImage = techTransformImage)
   : post.title.includes("Walkable")
   ? (postImage = walkableImage)
   : (postImage = null);


  return (
    <>
      <SEO
        title={`${post.title} | Brooklyn Homes Blog`}
        description={
          post.summary || "Read this insightful blog post on Brooklyn Homes."
        }
        keywords={`${post.title}, Brooklyn Homes blog, real estate blog, property tips, real estate insights, housing trends`}
        image={
          post.image || "https://brooklynhomesltd.com/homepage_seo_img.webp"
        }
        url={`https://brooklynhomesltd.com/blog/${slug}`}
      />

      <BlogHero text={post.title} image={postImage} />
      <div
        className={
          isDark
            ? "flex justify-between mx-auto bg-black text-white"
            : "flex justify-between mx-auto bg-white text-black"
        }
      >
        <div className="flex-1 p-6">
          <div className="flex items-center justify-start">
            <p className="flex items-center p-1 text-sm">
              <SlCalender className="mr-3 text-xs md:text-sm font-semibold text-[#cf9a1e]" />
              {post.date}
            </p>
            <p className="flex items-center p-1 mx-3 text-sm">
              <CiUser className="mx-2 text-sm md:text-lg font-semibold text-[#cf9a1e]" />
              By {post.author}
            </p>
          </div>
          <h1 className="text-xl md:text-3xl font-bold my-10">{post.title}</h1>
          {post.image && (
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-auto mb-4 rounded"
              loading="lazy"
            />
          )}
          <div
            className={
              isDark
                ? "prose prose-invert lg:prose-xl max-w-none my-10 [&>p]:text-white [&>h1]:text-white [&>h2]:text-white"
                : "prose prose-invert lg:prose-xl max-w-none my-10 [&>p]:text-black [&>h1]:text-black [&>h2]:text-black"
            }
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          <h3 className="text-xl mb-2 mt-28">💬 Leave a Reply</h3>
          <p className="text-xs">Your email address will not be published</p>

          <form
            className="w-full flex flex-col items-start justify-evenly my-10 lg:my-0"
            onSubmit={handleReply}
          >
            <div className="flex flex-col md:flex-row justify-between items-center w-full">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="my-5 p-2 border border-gray-500 w-full md:w-[30%]"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                className="my-5 p-2 border border-gray-500 w-full md:w-[30%]"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="text"
                name="website"
                placeholder="Your Website"
                className="my-5 p-2 border border-gray-500 w-full md:w-[30%] focus:border-[#cf9a1e]"
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
              />
            </div>

            <textarea
              className="my-5 p-8 border border-gray-500 w-full"
              placeholder="Comment"
              name="message"
              required
              value={reply}
              onChange={(e) => setReply(e.target.value)}
            ></textarea>

            <button
              className="bg-[#cf9a1e] p-4 w-40 my-5 flex items-center cursor-pointer text-white font-semibold"
              type="submit"
            >
              Post Reply
              <FaArrowRightLong className="ml-2" />
            </button>
          </form>

          {post.replies?.length > 0 && (
            <div className="mt-12">
              <h4 className="text-lg mb-2">Replies</h4>
              <ul className="space-y-4">
                {post.replies.map((r, idx) => (
                  <li
                    key={idx}
                    className="bg-[#333333] p-2 rounded text-gray-300"
                  >
                    <p className="mt-1">{r.message}</p>

                    <div className="mt-5 mb-2">
                      {" "}
                      <p className="font-semibold">{r.name}</p>
                      {r.website && (
                        <a
                          href={
                            r.website.startsWith("http")
                              ? r.website
                              : `http://${r.website}`
                          }
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-400 text-xs hover:underline"
                        >
                          {r.website}
                        </a>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <BlogSidebar posts={allPosts} setFilteredPosts={setFilteredPosts} />
      </div>
    </>
  );
}

export default SinglePost;
