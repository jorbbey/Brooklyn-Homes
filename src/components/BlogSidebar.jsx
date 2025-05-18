import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";

const BlogSidebar = ({ posts, setFilteredPosts }) => {
  const [searchQuery, setSearchQuery] = useState("");

  // Handle search functionality
  const handleSearch = (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) {
      setFilteredPosts(posts); // Reset to all posts if search is empty
      return;
    }
    const filtered = posts.filter(
      (post) =>
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.content.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredPosts(filtered);
  };

  // Handle archive filter (only May 2025 for now)
  const handleArchiveFilter = (month) => {
    const filtered = posts.filter((post) => post.date.includes(month));
    setFilteredPosts(filtered);
  };

  // Handle category filter
  const handleCategoryFilter = (category) => {
    const filtered = posts.filter(
      (post) => post.category?.toLowerCase() === category.toLowerCase()
    );
    setFilteredPosts(filtered);
  };

  return (
    <div className="hidden lg:block w-[30%] p-6 bg-gray-100 text-black ">
      {/* Archives Section */}
      <div className="mb-8 bg-white">
        <h3 className="text-lg md:text-xl lg:text-3xl p-4 border-l-1 border-[#cf9a1e]">
          Archives
        </h3>
        <a
          href="#"
          onClick={() => handleArchiveFilter("May 2025")}
          className="flex items-center text-gray-400 hover:text-[#cf9a1e] text-sm md:text-lg p-4 border-t-1 border-gray-300"
        >
          <span className="mr-2">📅</span> May 2025
        </a>
      </div>

      {/* Category Section */}
      <div className="mb-8 bg-white">
        <h3 className="text-lg md:text-xl lg:text-3xl p-4 border-l-1 border-[#cf9a1e]">
          Category
        </h3>
        <a
          href="#"
          onClick={() => handleCategoryFilter("Lifestyle")}
          className="flex items-center text-gray-400 hover:text-[#cf9a1e] text-sm md:text-lg p-4 border-t-1 border-gray-300"
        >
          <span className="w-3 h-3 bg-[#cf9a1e] rounded-full mr-2"></span>{" "}
          Lifestyle
        </a>
      </div>

      {/* Search Section */}
      <div className="bg-white">
        <h3 className="text-lg md:text-xl lg:text-3xl p-4 border-l-1 border-[#cf9a1e]">
          Search
        </h3>
        <form
          onSubmit={handleSearch}
          className="flex items-center text-sm md:text-lg p-4 border-t-1 border-gray-300"
        >
          <input
            type="text"
            placeholder="Search ..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full p-2  text-black border border-gray-600 rounded-md focus:outline-none focus:ring-1 focus:ring-[#cf9a1e] placeholder-gray-400"
          />
          <button
            type="submit"
            className="p-2 text-black rounded-r-md hover:bg-teal-700"
          >
            <CiSearch className="text-2xl" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default BlogSidebar;
