import { useState } from "react";
import { HiOutlineMenu } from "react-icons/Hi";
import { IoCloseSharp } from "react-icons/io5";
import defaultuser from "../assets/DefaultUser.png";

const TopBar = () => {
  const [IsOpen, setIsOpen] = useState(false);

  const menuAction = () => {
    setIsOpen(!IsOpen);
  };

  return (
    <>
      <nav className="h-[50px] relative bg-sky-950 text-white flex justify-between text-xl font-bold z-20">
        <div className="p-2 flex items-center">
          <div className="rounded-full border-sky-400 h-[40px] w-[40px] border-2 overflow-hidden pt-1">
            <img src={defaultuser} alt="Test" />
          </div>
          <div className="p-2">Brukernavn</div>
        </div>
        <div
          className="flex pr-3 items-center w-12 text-5xl md:hover:text-6xl justify-center duration-150 z-20"
          onClick={menuAction}
        >
          {IsOpen ? <IoCloseSharp /> : <HiOutlineMenu />}
        </div>
      </nav>
      <div
        className={`bg-sky-950 absolute text-white top-[50px] w-full flex-col duration-300 ease-in-out py-3 z-10 ${
          IsOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <ul>
          <li className="p-3 px-10">
            <a href="#">MenuItem 1</a>
          </li>
          <li className="p-3 px-10">
            <a href="#">MenuItem 2</a>
          </li>
          <li className="p-3 px-10">
            <a href="#">MenuItem 3</a>
          </li>
          <li className="p-3 px-10">
            <a href="#">MenuItem 4</a>
          </li>
          <li className="flex w-full justify-end p-3 px-10">
            <a href="#">Logg ut</a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default TopBar;
