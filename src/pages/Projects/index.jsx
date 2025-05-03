import React, { useState } from "react";
import { Link } from "react-router-dom";
import SubHero from "../../components/SubHero";
// import firstVid from "../../assets/vid2.mp4";
// import secondVid from "../../assets/vid3.mp4";
// import thirdVid from "../../assets/hero_vid.mp4";
import living_room from '../../assets/livingroom4.jpeg'
import DurumiSite1_1 from "../../assets/durumi-site1/DurumiSite1_1.webp";
import DurumiSite1_sketch2 from "../../assets/durumi-site1/site1_sketch2.webp";
import DurumiSite1_sketch1 from "../../assets/durumi-site1/site1_sketch1.webp";
import DurumiSite1_sketch3 from "../../assets/durumi-site1/site1_sketch3.webp";
import DurumiSite2_1 from "../../assets/durumi-site2/Durumi Site 2 A_5 - Photo.webp"
import DurumiSite2_sketch1 from "../../assets/durumi-site2/site2_sketch1.webp";
import DurumiSite2_sketch2 from "../../assets/durumi-site2/site2_sketch2.webp";
import DurumiSite2_sketch3 from "../../assets/durumi-site2/site2_sketch3.webp";
import SEO from "../../components/SEO";
const Index = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const handleVideoClick = (videoSrc) => {
    setSelectedVideo(videoSrc);
  };

  const closeModal = () => {
    setSelectedVideo(null);
  };

  return (
    <>
      <SEO
        title="Our Projects | Brooklyn Homes"
        description="Explore the architectural excellence of Brooklyn Homes through our featured projects. From conceptual sketches to stunning 3D renders, see how we bring real estate dreams to life in Abuja and beyond."
        keywords="Brooklyn Homes projects, Abuja real estate development, property construction, Durumi site, home design Abuja, real estate architecture, building projects Nigeria"
        image="https://brooklynhomesltd.com/homepage_seo_img.webp"
        url="https://brooklynhomesltd.com/projects"
      />

      <div className="text-white relative">
        <SubHero text="Our Projects – Where Dreams Meet Reality" />

        <h1 className="text-2xl mt-20 mb-5 mx-5">Upcoming projects ...</h1>
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

        <Link to="/durumisite1">
          <h1 className="text-sm hover:underline text-[#bc963f] mb-20 mx-5">
            View details →
          </h1>
        </Link>

        <div className="flex justify-center items-center overflow-auto test-scrollbar w-full mt-20">
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

        <Link to="/durumisite2">
          <h1 className="text-sm hover:underline text-[#bc963f] mb-20 mx-5">
            View details →
          </h1>
        </Link>
        {/* 
      <h1 className="text-2xl mx-5 mt-20">Interior view - Home Decor</h1>
      <div className="flex justify-center items-center overflow-auto w-full mt-10">
       <div className="flex justify-around items-center gap-4 w-[120%]">
          {[thirdVid, secondVid, firstVid].map(
            (vid, index) => (
              <video
                key={index}
                autoPlay
                loop
                muted
                className="h-72 md:h-96 object-cover w-[60%] cursor-pointer hover:opacity-50"
                onClick={() => handleVideoClick(vid)}
              >
                <source src={vid} type="video/mp4" />
              </video>
            )
          )}
        </div> 
      </div> */}

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
