import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { BackgroundContext } from "../../components/BackgroundContext";
import { MdKeyboardArrowRight } from "react-icons/md";
import SubHero from "../../components/SubHero";
import DurumiSite1_1 from "../../assets/durumi-site1/DurumiSite1_1.webp";
import DurumiSite1_sketch2 from "../../assets/durumi-site1/site1_sketch2.webp";
import DurumiSite1_sketch1 from "../../assets/durumi-site1/site1_sketch1.webp";
import DurumiSite1_sketch3 from "../../assets/durumi-site1/site1_sketch3.webp";
import DurumiSite2_1 from "../../assets/durumi-site2/Durumi Site 2 A_5 - Photo.webp";
import DurumiSite2_sketch1 from "../../assets/durumi-site2/site2_sketch1.webp";
import DurumiSite2_sketch2 from "../../assets/durumi-site2/site2_sketch2.webp";
import DurumiSite2_sketch3 from "../../assets/durumi-site2/site2_sketch3.webp";
import SEO from "../../components/SEO";
import SlideIn from "../../components/SlideIn";

const Index = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const handleVideoClick = (videoSrc) => {
    setSelectedVideo(videoSrc);
  };

  const closeModal = () => {
    setSelectedVideo(null);
  };
  ("");

  const { isDark } = useContext(BackgroundContext);

  const videos = [
    "https://firebasestorage.googleapis.com/v0/b/brooklynhomes-media.firebasestorage.app/o/hero_vid.mp4?alt=media&token=293f9e13-1b50-4153-9fe4-3fc398c17cd3",
    "https://firebasestorage.googleapis.com/v0/b/brooklynhomes-media.firebasestorage.app/o/vid2.mp4?alt=media&token=04ebebf4-cf08-427e-ac36-2d1f884a2c01",
    "https://firebasestorage.googleapis.com/v0/b/brooklynhomes-media.firebasestorage.app/o/vid3.mp4?alt=media&token=a2eaf6b5-c146-4a54-9d39-d6caed7d2d6a",
  ];

  return (
    <>
      <SEO
        title="Our Projects | Brooklyn Homes"
        description="Explore the architectural excellence of Brooklyn Homes through our featured projects. From conceptual sketches to stunning 3D renders, see how we bring real estate dreams to life in Abuja and beyond."
        keywords="Brooklyn Homes projects, Abuja real estate development, property construction, Durumi site, home design Abuja, real estate architecture, building projects Nigeria"
        image="https://brooklynhomesltd.com/homepage_seo_img.webp"
        url="https://brooklynhomesltd.com/projects"
      />

      <div
        className={
          isDark
            ? "text-white bg-black relative"
            : "text-black bg-white relative"
        }
      >
        <SlideIn>
          <SubHero text="Our Projects – Where Dreams Meet Reality" />
        </SlideIn>

        <SlideIn>
          <h1 className="text-2xl mt-20 mb-10 mx-3">Ongoing projects ...</h1>
          <h2 className="text-xl capitalize my-5 mx-3">Durumi Site I</h2>
          <div className="flex justify-center items-center overflow-auto test-scrollbar w-full">
            <div className="flex justify-between items-center gap-4 my-2 w-[300%]">
              {[
                DurumiSite1_sketch2,
                DurumiSite1_sketch1,
                DurumiSite1_sketch3,
                DurumiSite1_1,
              ].map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Project Image ${index + 1}`}
                  className="w-[60%] md:w-[30%] h-auto object-cover mb-4 cursor-pointer"
                  loading="lazy"
                />
              ))}
            </div>
          </div>
        </SlideIn>

        <SlideIn>
          <Link to="/durumisite1">
            <h1 className="text-md hover:underline text-[#cf9a1e] font-semibold mb-20 mx-5">
              View details →
            </h1>
          </Link>
        </SlideIn>

        <SlideIn>
          <h1 className="text-2xl mt-20 mb-10 mx-3">Upcoming projects ...</h1>
          <h2 className="text-xl capitalize my-5 mx-3">Durumi Site II</h2>
          <div className="flex justify-center items-center overflow-auto test-scrollbar w-full mt-5">
            <div className="flex justify-between items-center gap-4 my-2 w-[300%]">
              {[
                DurumiSite2_sketch1,
                DurumiSite2_sketch2,
                DurumiSite2_sketch3,
                DurumiSite2_1,
              ].map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Project Image ${index + 1}`}
                  className="w-[60%] md:w-[30%] h-auto object-cover mb-4 cursor-pointer"
                  loading="lazy"
                />
              ))}
            </div>
          </div>
        </SlideIn>

        <SlideIn>
          <Link to="/durumisite2">
            <h1 className="text-md hover:underline text-[#cf9a1e] font-semibold mb-20 mx-5">
              View details →
            </h1>
          </Link>
        </SlideIn>

        <h1 className="text-2xl mx-5 mt-20 font-semibold">
          Interior view - Home Decor
        </h1>
        <SlideIn>
          <div className="flex justify-center items-center overflow-auto w-full mt-10">
            <div className="flex justify-around items-center gap-4 w-[100%]">
              {videos.map((vid, index) => (
                <video
                  preload="none"
                  key={index}
                  autoPlay
                  loop
                  muted
                  className="h-32 md:h-64 lg:h-96 object-cover w-[100%] lg:w-[60%] cursor-pointer hover:opacity-50"
                  onClick={() => handleVideoClick(vid)}
                >
                  <source src={vid} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ))}
            </div>
          </div>
        </SlideIn>

        {/* Modal */}
        {selectedVideo && (
          <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
            <div className="relative w-full h-full flex items-center justify-center">
              <button
                onClick={closeModal}
                className="absolute top-5 right-5 text-white text-3xl z-50"
              >
                &times;
              </button>
              <video
                src={selectedVideo}
                className="w-full h-full object-contain"
                controls
                autoPlay
              />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Index;
