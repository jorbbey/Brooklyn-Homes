import React from 'react'
import team from '../assets/real-team.jpg'
const Services = () => {

    const services = [
      {
        head: "Property Development",
        desc: "Crafting modern, sustainable residential spaces.",
      },
      {
        head: "Real Estate Investment",
        desc: "Unlocking high-return opportunities for investors.",
      },
      {
        head: "Facility Management",
        desc: "Ensuring your property thrives with expert care.",
      },
      {
        head: "Investment Advisory",
        desc: "Guiding you to smart, future-proof decisions.",
      },
    ];
  return (
    <section className="my-30">
      <h1 className="text-4xl my-20 mx-5">Services We Offer</h1>
      <div className="flex justify-between items-center">
        <main className="flex flex-wrap items-center justify-start w-[70%]">
          {services.map((item) => (
            <div key={item.head} className="m-10 p-4 w-[35%]">
              <h1 className="text-xl my-5 text-[#bc963f]">{item.head}</h1>
              <p className='my-3 text-sm'>{item.desc}</p>
            </div>
          ))}
        </main>

        <div className='w-[70%]'>
          <img src={team} alt="broklynhomes team" />
        </div>
      </div>
    </section>
  );
}

export default Services