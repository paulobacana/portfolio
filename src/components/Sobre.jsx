import React from "react";

export const Sobre = () =>{
    return(
        <>
        <main className="px-10 bg-[#2C3333] md:px-20 lg:px-40 " id="sobre">
            <div className="flex-1 md:m-auto md:max-w-6xl md:w-full pt-24 md:pt-32 pb-20">

                <h3 className=" text-center text-4xl py-5 md:py-12 text-slate-100 font-extralight md:text-5xl ">Sobre mim</h3>

                <p className="text-md py-2 leading-8 text-[#CBE4DE] font-extralight md:text-3xl">
                Olá! Meu nome é Paulo Emílio e estou empolgado em compartilhar meu portfólio com você. 
                Tenho 17 anos, estou no último ano do curso de <span className="text-[#0E8388]">Técnico em Desenvolvimento de Sistemas</span>, 
                que tive o prazer de cursar nos últimos três anos, simultaneamente com o ensino médio. 
                Ao longo dessa jornada, descobri minha paixão pela lógica e pela programação, 
                e estou constantemente em busca de novas experiências para expandir meu conhecimento nessa área em constante evolução.
                </p>

                <p className="text-md py-5 md:py-12 leading-8 text-[#CBE4DE] font-extralight  md:text-3xl">
                Acredito que a melhor forma de colocar em prática tudo o que aprendi é ingressar no mercado de trabalho. 
                Sou uma pessoa que trabalha bem em equipe, valorizando a colaboração e o compartilhamento de ideias. 
                Tenho sede de aprendizado e estou sempre disposto a enfrentar desafios. 
                Possuo experiência em linguagens como <span className="text-[#0E8388]">C#</span> e <span className="text-[#0E8388]">Javascript</span>, 
                as quais utilizei em projetos de estudo e em trabalhos práticos.
                </p>

                <p className="text-md py-5 md:py-2 leading-8 text-[#CBE4DE] font-extralight  md:text-3xl">
                Estou animado para compartilhar com vocês o meu trabalho e as minhas aspirações de me tornar um <span className="text-[#0E8388]"> Desenvolvedor Back-End</span> de destaque.
                </p>
          </div>
        </main>
        </>
    )
}

export default Sobre;