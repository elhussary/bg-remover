import React from "react";
import { RiInstagramLine, RiDownloadCloud2Line } from "react-icons/ri";
const Navbar = ({ setDownloadPopup, imageurl }) => {
  return (
    <nav className="p-6 flex justify-end items-center pb-0.5 fixed w-full bg-white shadow-inner">
      <ul className="flex gap-2.5 px-2 pt-2">
        <li>
          <a href="https://www.instagram.com/ahmeedwael11" target="_blank" className="text-sm">
            <RiInstagramLine size={24} />
          </a>
        </li>
        <li>
          <button
            onClick={() => {
              if (imageurl) {
                setDownloadPopup(true);
              }
            }}
          >
            <RiDownloadCloud2Line size={24} />
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
