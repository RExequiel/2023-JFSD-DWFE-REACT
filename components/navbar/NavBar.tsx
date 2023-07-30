"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const pathname = usePathname();
  const isActiveAbout = pathname.startsWith("/about");
  const isActiveSales = pathname.startsWith("/sales");
  const isActiveContact = pathname.startsWith("/contact");

  const handleToggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <nav className="bg-blue-500 p-4 flex items-center justify-between">
      <div className="flex justify-between items-center">
        <Link href="/">
          <p className="text-slate-950 text-2xl font-bold mr-4">
            <Image
              className="inline-flex"
              src="/misiotronica.png"
              width={30}
              height={30}
              alt="misiotronica-logo"
            />{" "}
            isiotrónica
          </p>
        </Link>
        <input
          type="text"
          placeholder="Buscar..."
          value={searchTerm}
          onChange={handleSearch}
          className="border rounded-lg p-2 hidden md:block text-gray-700 focus:outline-none focus:ring focus:border-blue-300"
        />
      </div>
      <div className="md:flex space-x-4">
        <Link href="/sales">
          <span
            className={
              isActiveSales
                ? "text-white underline font-semibold hidden md:block"
                : "text-slate-950 font-semibold hidden md:block"
            }
          >
            Ventas
          </span>
        </Link>
        <Link href="/about">
          <span
            className={
              isActiveAbout
                ? "text-white underline font-semibold hidden md:block"
                : "text-slate-950 font-semibold hidden md:block"
            }
          >
            Sobre Nosotros
          </span>
        </Link>
        <Link href="/contact">
          <span
            className={
              isActiveContact
                ? "text-white underline font-semibold hidden md:block"
                : "text-slate-950 font-semibold hidden md:block"
            }
          >
            Contacto
          </span>
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
              <Link href="/sales">
                <span
                  className={
                    isActiveSales
                      ? "text-white underline font-semibold"
                      : "text-slate-950 font-semibold"
                  }
                >
                  Ventas
                </span>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <span
                  className={
                    isActiveAbout
                      ? "text-white underline font-semibold"
                      : "text-slate-950 font-semibold"
                  }
                >
                  Sobre Nosotros
                </span>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <span
                  className={
                    isActiveContact
                      ? "text-white underline font-semibold"
                      : "text-slate-950 font-semibold"
                  }
                >
                  Contacto
                </span>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
