import React from 'react';
import {AiFillLinkedin, AiOutlineWhatsApp, AiFillGithub} from "react-icons/ai";



const Footer = () => {
  return (
    <>
    <footer className="bg-[#232828] h-32">
        <div className="flex flex-row items-center justify-center gap-4 pt-6 text-4xl text-gray-400">
            <a href="https://www.linkedin.com/in/paulo-emilio-427319254/" target="_blank"><AiFillLinkedin className="md:hover:scale-[1.20] md:hover:rotate-[3deg] duration-1000 cursor-pointer"/></a>
            <a href="https://github.com/paulobacana" target='_blank'><AiFillGithub className="md:hover:scale-[1.20] md:hover:rotate-[3deg] duration-1000 cursor-pointer"/></a>
            <a href="https://wa.me/5511955208265" target="_blank"><AiOutlineWhatsApp className="md:hover:scale-[1.20] md:hover:rotate-[3deg] duration-1000 cursor-pointer"/></a>
        </div>
        <div className="flex flex-row justify-center pt-4 md:text-4xl">
            <a className="text-md leading-8 text-gray-400 font-light  md:text-2xl duration-500">Copyright © Paulo Emílio· 2023</a>
        </div>
    </footer>
    </>
  );
};

export default Footer;

