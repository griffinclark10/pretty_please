import Link from "next/link";
import React, { useState } from "react";
import NavItem from "./NavItem";

const MENU_LIST = [
  { text: "Home", href: "/" },
  { text: "About Us", href: "/about" },
  { text: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [navActive, setNavActive] = useState(false);
  const [activeIdx, setActiveIdx] = useState(-1);

  return (
    <header className="flex justify-between w-full items-center py-4 px-6 bg-gray-800 text-white">
      <nav className="w-full">
        <Link href={"/"}>
          <h1 className="text-xl cursor-pointer font-semibold">PrettyPlease</h1>
        </Link>
        <div
          onClick={() => setNavActive(!navActive)}
          className="cursor-pointer md:hidden"
        >
          {/* Icon for menu bar, you can use any icon or just a simple text like 'Menu' */}
          <span>Menu</span>
        </div>
        <div className={`flex-col md:flex-row md:flex ${navActive ? 'block' : 'hidden'} md:block`}>
          {MENU_LIST.map((menu, idx) => (
            <div
              onClick={() => {
                setActiveIdx(idx);
                setNavActive(false);
              }}
              key={menu.text}
              className={`py-2 px-4 rounded hover:bg-gray-700 ${activeIdx === idx ? 'bg-gray-700' : ''}`}
            >
              <NavItem active={activeIdx === idx} {...menu} />
            </div>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
