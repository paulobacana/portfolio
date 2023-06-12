import React from "react";
import {AiFillLinkedin, AiFillGithub, AiOutlineWhatsApp} from "react-icons/ai";
import {BsFillFileEarmarkArrowDownFill as CV} from "react-icons/bs"
import paulo from "/src/img/paulo2.png";
import { HashLink as Link } from 'react-router-hash-link';
import Pdf from '../Documents/MeuCurriculo.pdf'
//import { useTypewriter } from 'react-simple-typewriter';

function Intro() {

/*  const { text } = useTypewriter({
    words: ['Desenvolvedor Back-End', 'Mestre das artes', 'Mestre do bambole'],
    loop: {},
    typeSpeed:120,
    deleteSpeed:80,
  });*/

  return (
    <>
      <main className="px-10 bg-[#2C3333] md:px-20 lg:px-40 ">
        <section className="min-h-screen md:pt-20">
          <div className="flex flex-col items-start md:flex-row">
            <div className="text-center p-10 py-10 md:w-1/2">
              <p className="text-md py-1 leading-8 text-[#CBE4DE] font-light max-w-xl mx-auto md:text-2xl">
                Olá, meu nome é
              </p>
              <h2 className="text-5xl py-2 text-[#0E8388] font-karla font-bold md:text-7xl">
                Paulo Emílio
              </h2>
              <h4 className="text-2xl py-2 text-[#0E8388] font-extralight md:text-4xl" >
                Futuro Desenvolvedor backend
              </h4>

              <div className="md:py-24">
                <p className="text-md leading-10 text-[#CBE4DE] font-extralight md:w-full md:text-2xl ">
                Oii, me chamo Paulo, atualmente estou no meu último ano 
                de técnico em Desenvolvimento de Sistemas e planejo me 
                tornar um desenvolvedor Back-End em breve.
                </p>

                <p className="text-md py-6 md:py-10 leading-10 text-[#CBE4DE] font-extralight md:w-full md:text-2xl">
                No momento estou focado em aprender as tecnologias <span className="text-[#0E8388]">ASP.NET Core MVC</span> e <span className="text-[#0E8388]">ASP.NET Web API</span>
                </p>

              <div className="pt-20 hidden md:block">
                <Link className="text-md leading-8 text-[#CBE4DE] font-light  md:text-2xl cursor-pointer hover:text-[#0E8388] duration-500" to='#projetos' smooth>Ver mais</Link>
              </div>
            </div>
          </div>
      
            <div className="flex flex-col justify-center items-center bg-gradient-to-b from-[#08474955] rounded-full w-80 h-80 mt-4 md:ml-60 md:h-1/2 md:w-1/2">
              <div className="flex justify-center items-center">
                <img src={paulo} className='h-full w-44 pt-8 md:pt-20 pl-4 md:h-full md:w-full md:hover:scale-[1.15] md:hover:rotate-[10deg] duration-1000' />
              </div>

              <div className="flex justify-center gap-12 py-6 md:py-16 dark:text-gray-400 md:text-5xl">
                <a href="https://www.linkedin.com/in/paulo-emilio-427319254/" target="_blank"><AiFillLinkedin className="md:hover:scale-[1.20] md:hover:rotate-[3deg] duration-1000 cursor-pointer"/></a>
                <a href="https://github.com/paulobacana" target='_blank'><AiFillGithub className="md:hover:scale-[1.20] md:hover:rotate-[3deg] duration-1000 cursor-pointer"/></a>
                <a href="https://wa.me/5511955208265" target="_blank"><AiOutlineWhatsApp className="md:hover:scale-[1.20] md:hover:rotate-[3deg] duration-1000 cursor-pointer"/></a>
              </div>

              <div className="flex flex-row gap-2 py-6 justify-center dark:text-gray-400 md:text-3xl font-extralight">
                <a href={Pdf} target="_blank">Baixar CV</a>
                <a href={Pdf} target="_blank"><CV className="md:hover:scale-[1.20] md:hover:rotate-[3deg] duration-1000 cursor-pointer"/></a>
              </div>      
            </div>
          </div>
        </section>
      </main>
    </>
  )
}


export default Intro
