import Image from "next/image";
import Hamburger from "@/assets/icon-menu.svg";
import Logo from "@/assets/logo.svg";
import GalaxyButton from "@/components/GalaxyButton";

const Header = () => {
  return (
    <div className=" w-5/6 overflow-x-clip">
      <nav className=" bg-black/30 flex items-center p-4 justify-between rounded-xl thin-border sticky top-10 backdrop-blur-md z-50">
        <a href="#" className="  w-[200px]">
          <div className="flex items-center gap-3">
            <div className="p-1 rounded-lg w-10 flex justify-center items-center thin-border bg-custom-linear">
              <Logo className="h-7 w-7 text-black" />
            </div>
            <h1 className=" section-title text-3xl font-bold leading-none text-left ">
              Nova
            </h1>
          </div>
        </a>

        <div className="flex items-center gap-5">
          <ul className="hidden md:flex text-white text-sm gap-5 font-base   ">
            <li>
              <a href="#">Features</a>
            </li>
            <li>
              <a href="#">Developers</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
            <li>
              <a href="#">Changelog</a>
            </li>
          </ul>
          <GalaxyButton buttonText="Join waitlist" />

          <Hamburger className="md:hidden" />
        </div>
      </nav>
    </div>
  );
};

export default Header;
