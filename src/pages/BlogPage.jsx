import React, { useEffect, useState } from "react";
import SubHero from "../components/SubHero";
import { Link } from "react-router-dom";
import { SlCalender } from "react-icons/sl";
import { CiUser } from "react-icons/ci";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import SEO from "../components/SEO"; // Import the SEO component
import BlogSidebar from "../components/BlogSidebar";

const BlogPage = () => {
  const [posts, setPosts] = useState([]);

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
        setPosts([]); // Reset to empty array on error
      }
    };

    fetchPosts();
  }, []);

  if (posts.length === 0 && posts !== null) {
    return (
      <>
        <SubHero text="Brooklyn Homes Blog – Insights, Trends, and Tips" />
        <div className="flex flex-col items-center justify-start my-16 min-h-screen bg-white text-black">
          <p className="text-lg">Oops! No posts found.</p>
          <Link to="/" className="mt-4 text-[#cf9a1e] font-semibold hover:underline">
            Back to Homepage
          </Link>
        </div>
      </>
    );
  }

  if (posts.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-white text-black">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-[#cf9a1e] border-solid mb-4"></div>
        <p className="text-lg">Loading posts...</p>
      </div>
    );
  }

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

      <div className="">
        <SubHero text="Brooklyn Homes Blog – Insights, Trends, and Tips" />
        <div className="flex justify-between mx-auto">
          <div className="p-6 max-w-4xl">
            {posts.map((post) => (
              <div
                key={post.id}
                className="mb-6 border-b border-gray-400 p-4 shadow-xl text-black"
              >
                <div className="flex items-center justify-start">
                  <p className="flex items-center p-1 text-sm">
                    <SlCalender className="mr-3 text-sm font-semibold text-[#cf9a1e]" />
                    {post.date}
                  </p>
                  <p className="flex items-center p-1 mx-3 text-sm">
                    <CiUser className="mx-2 text-lg font-semibold text-[#cf9a1e]" />
                    By {post.author}
                  </p>
                </div>
                <h2 className="text-xl my-2 font-semibold">{post.title}</h2>
                <p className="my-3 text-gray-950">{post.summary}</p>
                <Link
                  to={`/blog/${post.slug}`}
                  className="text-[#cf9a1e] mt-2 inline-block font-semibold"
                >
                  Read more →
                </Link>
              </div>
            ))}
          </div>
          <BlogSidebar />
        </div>
      </div>
    </>
  );
};

export default BlogPage;
