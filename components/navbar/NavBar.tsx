"use client"
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const handleToggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <nav className="bg-blue-500 p-4 flex items-center justify-between">
      <div className="flex items-center">
        <Link href="/">
          <p className="text-slate-950 text-2xl font-bold mr-4"><Image className="inline-flex" src="/misiotronica.png" width={30} height={30} alt="misiotronica-logo" /> isiotrónica</p>
        </Link>
        <input
          type="text"
          placeholder="Buscar..."
          value={searchTerm}
          onChange={handleSearch}
          className="border rounded-lg p-2 hidden md:block"
        />
      </div>
      <div className="md:flex space-x-4">
        <Link href="/about">
          <span className="text-slate-950 font-semibold hidden md:block">Sobre Nosotros</span>
        </Link>
        <Link href="/sales">
          <span className="text-slate-950 font-semibold hidden md:block">Ventas</span>
        </Link>
        <Link href="/contact">
          <span className="text-slate-950 font-semibold hidden md:block">Contacto</span>
        </Link>
      </div>
      <button
        onClick={handleToggleMenu}
        className="text-slate-950 font-semibold text-2xl md:hidden focus:outline-none"
      >
        &#9776;
      </button>
      {isOpen && (
        <div className="md:hidden absolute top-16 right-0 bg-blue-500 p-4">
          <ul className="space-y-4">
            <li>
              <Link href="/about">
                <span className="text-slate-950 font-semibold">Sobre Nosotros</span>
              </Link>
            </li>
            <li>
              <Link href="/sales">
                <span className="text-slate-950 font-semibold">Venta</span>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <span className="text-slate-950 font-semibold">Contacto</span>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
