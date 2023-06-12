import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineArrowLeft } from 'react-icons/ai';
import { HashLink as Link } from 'react-router-hash-link';

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
    <nav className="bg-[#2C3333]">
      <div className="flex flex-col items-end justify-between h-16">
        {isMenuOpen ? (
          <button className="text-white text-4xl pr-20 pt-8" onClick={toggleMenu}>
            <AiOutlineArrowLeft />
          </button>
        ) : (
          <button className="text-white text-4xl pr-20 pt-8 hover:text-[#0E8388] duration-200" onClick={toggleMenu}>
            <AiOutlineMenu />
          </button>
        )}
    
        <div className={`${isMenuOpen ? 'block' : 'hidden'} fixed inset-0 bg-[#232828] z-20`}>
          <div className=" text-white">
    
            <div className="flex flex-col items-end">
            {isMenuOpen && (
              <button className="text-white text-4xl pr-20 pt-8 hover:text-[#0E8388] duration-200" onClick={toggleMenu}>
                <AiOutlineMenu />
              </button>
            )}
            </div>
            <ul className='flex flex-col items-center text-3xl py-20 leading-8 text-[#CBE4DE] font-light gap-20'>
              <li>
                <Link className="hover:text-gray-300" to='#sobre' smooth onClick={toggleMenu}>Sobre</Link>
              </li>
              <li>
                <Link className="hover:text-gray-300" to='#projetos' smooth onClick={toggleMenu}>Projetos</Link>
              </li>
              <li>
                <Link className="hover:text-gray-300" to='#tecnologia' smooth onClick={toggleMenu}>Tecnologias</Link>
              </li>
              <li>
                <Link className="hover:text-gray-300" to='#projeto' smooth onClick={toggleMenu}>Projetos</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
    </>
  );
};

export default Nav;
