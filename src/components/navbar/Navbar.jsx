import logos from "../../assets/images/logos/Logo-GG-w200.png";
export default function Navbar() {
  return (
    <div className="w-full py-4 fixed ">
      <nav className="container mx-auto flex justify-around items-center h-15">
        <img src={logos} className="w-30" alt="Logo green garden" />
        <ul className="hidden md:flex list-none gap-2 text-slate-50 font-semibold space-x-3">
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
