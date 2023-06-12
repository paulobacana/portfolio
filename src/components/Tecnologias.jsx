import React from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { AiFillGithub, AiFillHtml5 } from "react-icons/ai";
import { SiTailwindcss, SiReact, SiMysql, SiCsharp } from "react-icons/si";

export const Tecnologias = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 100,
    cssEase: "linear",
    arrows: false,
    draggable: false,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
    ],
  };

  return (
    <>
      <main className="px-10 bg-[#2C3333] md:px-20 lg:px-40 " id="tecnologia">
        <section>
          <div className="md:pt-48 pt-16">
            <h3 className=" text-center text-4xl pb-20  text-slate-100 font-extralight md:text-5xl">Tecnologias</h3>
          </div>
          <Slider {...settings}>
            <div className="text-center text-7xl md:text-9xl text-[#0E8388] md:p-10 rounded-xl flex-1 md:hover:scale-[1.40] duration-200">
              <AiFillGithub />
            </div>

            <div className="text-center text-7xl md:text-9xl text-[#0E8388] md:p-10 rounded-xl flex-1 md:hover:scale-[1.40] duration-200">
              <AiFillHtml5 />
            </div>

            <div className="text-center text-7xl md:text-9xl text-[#0E8388] md:p-10 rounded-xl flex-1 md:hover:scale-[1.40] duration-200">
              <SiTailwindcss />
            </div>

            <div className="text-center text-7xl md:text-9xl text-[#0E8388] md:p-10 rounded-xl flex-1 md:hover:scale-[1.40] duration-200">
              <SiReact />
            </div>

            <div className="text-center text-7xl md:text-9xl text-[#0E8388] md:p-10 rounded-xl flex-1 md:hover:scale-[1.40] duration-200">
              <SiMysql />
            </div>

            <div className="text-center text-7xl md:text-9xl text-[#0E8388] md:p-10 rounded-se-xl flex-1 md:hover:scale-[1.40] duration-200">
              <SiCsharp />
            </div>
          </Slider>
        </section>
      </main>
    </>
  );
};

export default Tecnologias;
