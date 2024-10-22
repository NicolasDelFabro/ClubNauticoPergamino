'use client'

import { useState } from 'react';
import Link from "next/link";
// import Eventos from "../views/Eventos";


const MenuDesplegable = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Función para manejar la apertura y cierre del menú
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block text-left">
      <button
        className="bg-blue-500 text-white font-semibold py-2 px-4 rounded inline-flex items-center"
        onClick={toggleMenu}
      >
        <span>Menú</span>
        <svg
          className="ml-2 w-4 h-4"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Si isOpen es true, mostramos el menú */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg">
          <ul className="py-1 text-center">
            <li>
              <Link href=""><p className='block px-4 py-3 text-lg text-gray-700 hover:bg-gray-100'> Galeria</p></Link>
            </li>
            <li>
             <Link href="../views/Eventos"><p className='block px-4 py-3 text-lg text-gray-700 hover:bg-gray-100'> Eventos</p></Link>
            </li>
            <li>
              <Link href=""><p className='block px-4 py-3 text-lg text-gray-700 hover:bg-gray-100'> Planillas</p></Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};


export default MenuDesplegable