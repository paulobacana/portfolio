import React from "react";
import web1 from "/src/img/web1.png";
import web2 from "/src/img/web2.png";
import web3 from "/src/img/web3.png";
import web4 from "/src/img/web4.png";
import web5 from "/src/img/web5.png";
import web6 from "/src/img/web6.png";

export const Projetos = () => {
  return (
    <>
      <main className="px-10 bg-[#2C3333] md:px-20 lg:px-40 " id="projetos">
        <section className="pt-24">
          <div>
            <h3 className=" text-center text-4xl py-5 md:py-12 text-slate-100 font-extralight md:text-5xl ">
              Projetos
            </h3>
          </div>

          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/4 flex-1 cursor-pointer">
              <div className="group relative">
                <img
                  className="rounded-lg object-cover transition duration-800 ease-in-out"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                  src={web1}
                  alt="Imagem"
                />
                <div className="opacity-0 group-hover:opacity-100 absolute inset-0 flex items-center justify-center bg-black bg-opacity-70 text-white transition duration-500">
                  <p className="text-md leading-8 font-extralight md:text-4xl mt-48">
                    Ver mais
                  </p>
                </div>
              </div>
            </div>

            <div className="basis-1/4 flex-1 cursor-pointer">
              <div className="group relative">
                <img
                  className="rounded-lg object-cover transition duration-800 ease-in-out hover:opacity-[0.45]"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                  src={web2}
                />
                <div className="opacity-0 group-hover:opacity-100 absolute inset-0 flex items-center justify-center bg-black bg-opacity-70 text-white transition duration-500">
                  <p className="text-md leading-8 font-extralight md:text-4xl mt-48">
                    Ver mais
                  </p>
                </div>
              </div>
            </div>
            <div className="basis-1/4 flex-1 cursor-pointer">
              <div className="group relative">
                <img
                  className="rounded-lg object-cover transition duration-800 ease-in-out hover:opacity-[0.45] "
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                  src={web3}
                />
                <div className="opacity-0 group-hover:opacity-100 absolute inset-0 flex items-center justify-center bg-black bg-opacity-70 text-white transition duration-500">
                  <p className="text-md leading-8 font-extralight md:text-4xl mt-48">
                    Ver mais
                  </p>
                </div>
              </div>
            </div>
            <div className="basis-1/4 flex-1 cursor-pointer">
              <div className="group relative">
                <img
                  className="rounded-lg object-cover transition duration-800 ease-in-out hover:opacity-[0.45]"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                  src={web4}
                />
                <div className="opacity-0 group-hover:opacity-100 absolute inset-0 flex items-center justify-center bg-black bg-opacity-70 text-white transition duration-500">
                  <p className="text-md leading-8 font-extralight md:text-4xl mt-48">
                    Ver mais
                  </p>
                </div>
              </div>
            </div>
            <div className="basis-1/4 flex-1 cursor-pointer">
              <div className="group relative">
                <img
                  className="rounded-lg object-cover transition duration-800 ease-in-out group-hover:opacity-[0.45]"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                  src={web5}
                />
                <div className="opacity-0 group-hover:opacity-100 absolute inset-0 flex items-center justify-center bg-black bg-opacity-70 text-white transition duration-500">
                  <p className="text-md leading-8 font-extralight md:text-4xl mt-48">
                    Ver mais
                  </p>
                </div>
              </div>
            </div>
            <div className="basis-1/4 flex-1 cursor-pointer">
              <div className="group relative">
                <img
                  className="rounded-lg object-cover transition duration-800 ease-in-out hover:opacity-[0.45] "
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                  src={web6}
                />
                <div className="opacity-0 group-hover:opacity-100 absolute inset-0 flex items-center justify-center bg-black bg-opacity-70 text-white transition duration-500">
                  <p className="text-md leading-8 font-extralight md:text-4xl mt-48">
                    Ver mais
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Projetos;
