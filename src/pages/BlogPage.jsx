import React, {useEffect, useState} from "react";
import SubHero from "../components/SubHero";
import { Link } from "react-router-dom";
import { SlCalender } from "react-icons/sl";
import { CiUser } from "react-icons/ci";
const BlogPage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("blogPosts") || "[]");
    setPosts(saved);
  }, []);

  return (
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
            <h2 className="text-xl font-semibold">{post.title}</h2>
            <p className="mt-1">{post.summary}</p>
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
  );
}

export default BlogPage