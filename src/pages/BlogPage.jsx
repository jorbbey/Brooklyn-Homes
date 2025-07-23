import React, { useEffect, useState, useContext } from "react";
import { BackgroundContext } from "../components/BackgroundContext";
import SubHero from "../components/SubHero";
import { Link } from "react-router-dom";
import { SlCalender } from "react-icons/sl";
import { CiUser } from "react-icons/ci";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import SEO from "../components/SEO";
import SlideIn from "../components/SlideIn";
import BlogSidebar from "../components/BlogSidebar";
import newRoadImage from "../../public/blog-posts/new-roads2.jpg";
import landOwnerImage from "../../public/blog-posts/land-owner.jpg";
import smartHomeImage from "../../public/blog-posts/smarthome2.jpg";
import walkableImage from "../../public/blog-posts/walkable-city.jpg";
import techTransformImage from "../../public/blog-posts/tech-transform.jpg"

const BlogPage = () => {
  const [posts, setPosts] = useState([]);

  const {isDark} = useContext(BackgroundContext)

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const snapshot = await getDocs(collection(db, "posts"));
        const fetchedPosts = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setPosts(fetchedPosts);
      } catch (error) {
        console.error("Error fetching posts:", error);
        setPosts([]); 
      }
    };

    fetchPosts();
  }, []);

  if (posts.length === 0 && posts !== null) {
    return (
      <>
        <SlideIn>
          <SubHero text="Brooklyn Homes Blog – Insights, Trends, and Tips" />
        </SlideIn>

        <SlideIn>
          <div
            className={
              isDark
                ? "flex flex-col items-center justify-start min-h-screen bg-black text-white"
                : "flex flex-col items-center justify-start  min-h-screen bg-white text-black"
            }
          >
            <p className="text-lg mt-10">Oops! No posts found.</p>
            <Link
              to="/"
              className="mt-4 text-[#cf9a1e] font-semibold hover:underline"
            >
              Back to Homepage
            </Link>
          </div>
        </SlideIn>
      </>
    );
  }

  if (posts.length === 0) {
    return (
      <SlideIn>
        <div
          className={
            isDark
              ? "flex flex-col items-center justify-center min-h-screen bg-black text-white"
              : "flex flex-col items-center justify-center min-h-screen bg-white text-black"
          }
        >
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-[#cf9a1e] border-solid mb-4"></div>
          <p className="text-lg">Loading posts...</p>
        </div>
      </SlideIn>
    );
  }

  const postsWithImages = posts.map((post) => {
  let postImage;
  if (post.title.includes("New Roads")) {
    postImage = newRoadImage;
  } else if (post.title.includes("Ownership")) {
    postImage = landOwnerImage;
  } else if (post.title.includes("Walkable")) {
    postImage = walkableImage;
  } else if (post.title.includes("Smart Home")) {
    postImage = smartHomeImage;
  } else if (post.title.includes("Technology")) {
    postImage = techTransformImage;
  } else {
    postImage = null;
  }
  return {...post, postImage}
  })
  



  return (
    <>
      {/* SEO for Blog Page */}
      <SEO
        title="Brooklyn Homes Blog | Real Estate News & Property Tips"
        description="Stay informed with the Brooklyn Homes Blog – your go-to source for property insights, real estate trends, homeowner tips, investment advice, and news from across Nigeria's housing sector."
        keywords="Brooklyn Homes blog, real estate news Nigeria, Abuja property insights, home buying tips, housing market trends, real estate investment Nigeria, Brooklyn Homes articles"
        image="https://brooklynhomesltd.com/homepage_seo_img.webp"
        url="https://brooklynhomesltd.com/blog"
      />

      <div className={isDark ? "bg-black text-white" : "bg-white text-black"}>
        <SlideIn>
          <SubHero text="Brooklyn Homes Blog – Insights, Trends, and Tips" />
        </SlideIn>
        <div className="flex items-center justify-between my-5">
          <SlideIn>
            <div className="px-4 py-8 mx-auto">
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 auto-rows-fr w-full">
                {posts.map((post) => (
                  <div
                    key={post.id}
                    className={`border rounded-xl shadow-lg overflow-hidden flex flex-col transition-all duration-300 ${
                      isDark
                        ? "bg-neutral-900 text-white border-neutral-700"
                        : "bg-white text-black border-gray-200"
                    }`}
                  >
                    {post.image && (
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-48 object-cover"
                      />
                    )}

                    <div className="p-5 flex flex-col flex-grow">
                      {/* Post Meta */}
                      <div
                        className={`flex items-center text-xs mb-2 ${
                          isDark ? "text-gray-400" : "text-gray-600"
                        }`}
                      >
                        <span className="flex items-center">
                          <SlCalender className="mr-1 text-[#cf9a1e]" />
                          {post.date}
                        </span>
                        <span className="mx-2">•</span>
                        <span className="flex items-center">
                          <CiUser className="mr-1 text-[#cf9a1e]" />
                          {post.author}
                        </span>
                      </div>

                      {/* Title */}
                      <h2 className="text-lg font-semibold mb-2">
                        {post.title}
                      </h2>

                      {/* Summary */}
                      <p
                        className={`text-sm mb-4 line-clamp-4 ${
                          isDark ? "text-gray-300" : "text-gray-700"
                        }`}
                      >
                        {post.summary}
                      </p>

                      {/* Read More */}
                      <div className="mt-auto">
                        <Link
                          to={`/blog/${post.slug}`}
                          className="text-[#cf9a1e] font-semibold hover:underline"
                        >
                          Read more →
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </SlideIn>
          {/* <BlogSidebar /> */}
        </div>
      </div>
    </>
  );
};

export default BlogPage;
