import { Link } from "react-scroll";

export const NavBar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex justify-center shadow-lg p-5 bg-gradient-to-r from-[#086ca7] via-[#0a609d] to-[#012a5e]   text-white">
      <div className="left_logo text-gray-500 text-2xl">
        <img src="Vesun-1.png" className="h-20 w-auto max-h-25"/>
      </div>

      {/* <ul className=" flex gap-5 text-gray-500 text-lg cursor-pointer">
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="cursor-pointer"
          >
            HOME
          </Link>
        </li>
        <li className="list_items hover:text-black hover:underline transition-all duration-500 h-0.5">
          <Link
            to="designs"
            smooth={true}
            duration={500}
            className="cursor-pointer"
          >
            DESIGNS
          </Link>
        </li>
        <li className="list_items hover:text-black hover:underline transition-all duration-500 h-0.5">
          <Link
            to="services"
            smooth={true}
            duration={500}
            className="cursor-pointer"
          >
            SERVICES
          </Link>
        </li>
        <li className="list_items hover:text-black hover:underline transition-all duration-500 h-0.5">
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="cursor-pointer"
          >
            CONTACT US
          </Link>
        </li>
      </ul> */}
    </nav>
  );
};
