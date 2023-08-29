import { coolGray } from "tailwindcss/colors";
import logos from "../../assets/images/logos/Logo-GG-w200.png";
import { useState, useEffect } from "react";
export default function Navbar() {
  const [scrolling, setScrolling] = useState(false);
  useEffect(() => {
    const navbarContainer = document.querySelector('#navbar')
    const handleScroll = () => {
      let scrollPosition = window.scrollY
      if (scrollPosition > 650) {
        if(!scrolling){
           navbarContainer.classList.add('bg-green-theme-600')
           setScrolling(true);
        }
      } else {
          navbarContainer.classList.remove('bg-green-theme-600')
          return setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <div className="w-full py-4 fixed transition duration-800 ease-in-out" id="navbar">
      <nav className="container mx-auto flex justify-around items-center h-15">
        <img src={logos} className="w-30" alt="Logo green garden" />
        <ul className="hidden md:flex list-none gap-2 text-slate-50 font-semibold space-x-3 tracking-wider">
          <li>Home</li>
          <li>About</li>  
          <li>Service</li>
          <li>Gallery</li>
          <li>Blog</li>
          <li>Contact</li>
        </ul>
      </nav>
    </div>
  );
}
