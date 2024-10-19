import Logo from "@/assets/logo.svg";
import XIcon from "@/assets/social-x.svg";
import InstagramIcon from "@/assets/social-instagram.svg";
import YoutubeIcon from "@/assets/social-youtube.svg";


export const Footer = () => {
  return (
    <footer className="bg-black flex items-center justify-between px-10 py-5 thin-border">
      <div className=" text-white p-1 rounded-lg w-10 h-10 flex justify-center items-center thin-border">
      <a href="#"> <Logo className="h-7 w-7 text-white" /></a> 
      </div>

      <div className="flex items-center gap-5">
        <ul className="hidden md:flex text-white text-sm gap-5 font-base  ">
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
      </div>
      

      <div className="flex items-center gap-7 text-white/50">
      <a href="#"><XIcon className="scale-[1.2]" /></a> 
      <a href="#"><InstagramIcon className="scale-[1.2]" /></a>  
      <a href="#"><YoutubeIcon className="scale-[1.5]" /></a> 
          </div>
    </footer>
  );
};
