import { content } from "../Content";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";

const Projects = () => {
  const { Projects } = content;
  return (
    <section className="bg-bg_light_primary" id="projects">
      <div className="md:container px-5 pt-14 min-h-screen flex flex-col justify-between">
        <div>
          <h2 className="title" data-aos="fade-down">
            {Projects.title}
          </h2>
          <h4 className="subtitle" data-aos="fade-down">
            {Projects.subtitle}
          </h4>
          <br />
        </div>
        <div className="flex items-center lg:flex-row flex-col-reverse gap-5">
          <img
            src={Projects.image}
            alt="..."
            data-aos="fade-right"
            className="max-w-[45vw] min-w-[22rem]"
          />
          {/* Swiper and Button Container */}
          <div className="flex flex-col h-full justify-between">
            <Swiper
              pagination={{
                clickable: true,
              }}
              data-aos="fade-left"
              spaceBetween={20}
              modules={[Pagination]}
              className="rounded-3xl pb-16 max-w-xs drop-shadow-primary self-start"
            >
              {Projects.project_content.map((content, i) => (
                <SwiperSlide
                  key={i}
                  className="bg-white rounded-3xl p-5 border-b-8 border-[#FAF9FD] h-fit"
                >
                  <img src={content.image} alt="..." />
                  <div className="flex flex-col gap-1 mt-2">
                    <h5 className="font-bold font-Poppins">{content.title}</h5>

                    <button className="font-bold text-gray self-end">
                      <a href={content.href} target="_blank">
                        READ MORE
                      </a>
                    </button>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            {/* Button Positioned at the Bottom */}
            <a href="#skills" className="block mt-5 mb-5 self-center">
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold py-3 px-6 rounded-full shadow-lg hover:from-purple-600 hover:to-blue-500 hover:scale-105 transform focus:outline-none focus:ring-4 focus:ring-purple-300 transition-transform duration-300 ease-in-out">
                SEE MORE
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
