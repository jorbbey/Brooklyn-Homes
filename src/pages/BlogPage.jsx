import React, { useEffect, useState } from "react";
import SubHero from "../components/SubHero";
import { Link } from "react-router-dom";
import { SlCalender } from "react-icons/sl";
import { CiUser } from "react-icons/ci";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import SEO from "../components/SEO"; // Import the SEO component

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
      }
    };

    fetchPosts();
  }, []);

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

      <div>
        <SubHero text="Brooklyn Homes Blog – Insights, Trends, and Tips" />
        <div className="p-6 max-w-4xl mx-auto">
          {posts.map((post) => (
            <div
              key={post.id}
              className="mb-6 border-b border-[#333333] p-4 shadow-xl text-white"
            >
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
              <h2 className="text-xl my-2 font-semibold">{post.title}</h2>
              <p className="my-3 text-gray-300">{post.summary}</p>
              <Link
                to={`/blog/${post.slug}`}
                className="text-[#bc963f] mt-2 inline-block"
              >
                Read more →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default BlogPage;
