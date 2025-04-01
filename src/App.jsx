import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Services } from "./views/services";
import { Designs } from "./views/designs";
import { DesignDetails } from "./views/designDetails";
import { NavBar } from "./views/navbar";
import { Menu } from "./views/menu";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Products } from "./views/products";
import Furniture from "./views/furniture";

function App() {
  const date = new Date().getFullYear();

  return (
    <>
      <NavBar />
      {/* <div
        id="home"
        className="hero_section relative w-full h-screen flex items-center justify-center"
      > */}
        {/* Background Image */}
        {/* <img
          src="Office.jpg"
          alt="Interior Design"
          className="absolute w-full h-full object-cover"
        /> */}

        {/* Overlay for better readability */}
        {/* <div className="absolute inset-0 bg-black bg-opacity-50"></div> */}

        {/* Centered Heading */}
        {/* <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold text-center absolute">
          One Stop Solution For Your Interior.
        </h1>
      </div> */}

      <div>
         <Menu/>
      </div>
      {/* <div>
        {" "}
        <Designs />{" "}
      </div> */}
      <Routes>
        <Route path="/" element={<Designs />} /> {/* Home page component */}
        <Route path="/services" element={<Services />} /> {/* Services page */}
        <Route path="/design/:id" element={<DesignDetails />} /> {/* Design details page */}
        <Route path="/furniture" element={<Furniture />} /> {/* Products page */}
        {/* Add more routes as needed */}
        {/* You can add more routes for other pages like Products, etc. */}
      </Routes>
      {/* <div>
        {" "}
        <Services />{" "}
      </div>

      <div>
        <Products />
      </div> */}

      <footer className="footer">
        <div
          id="contact"
          className="footer_section bg-gradient-to-r from-[#fdfbfb] via-[#e7e2dd] to-[#ebedee] p-8 border-b-4 border-b-white"
        >
          <h1 className="text-center mb-5 text-2xl text-zinc-600">
            Contact Us:
          </h1>
          <ul className="icons_div flex gap-6 items-center justify-center m-3">
            <a
              href="https://www.facebook.com/vesun.ent"
              target="_blank"
              className="text-3xl"
            >
              <i class="fa-brands fa-square-facebook"></i>
            </a>
            <a
              href="https://www.instagram.com/vesuninterior/"
              target="_blank"
              className="text-3xl"
            >
              <i class="fa-brands fa-instagram"></i>
            </a>
            <a
              href="mailto: vesuns@gmail.com"
              target="_blank"
              className="text-3xl"
            >
              <i class="fa-regular fa-envelope"></i>
            </a>
          </ul>
          <div className="contact_info flex items-center justify-center gap-5 text-zinc-600">
            <h3 className="address">
              <a
                href="https://maps.app.goo.gl/vYWzVSzhAufhxNV76"
                target="_blank"
              >
                <i class="fa fa-map-marker" aria-hidden="true"></i>{" "}
                Bhimsensthan, Kathmandu
              </a>
            </h3>
            <h3 className="number">
              <i class="fa fa-phone-square" aria-hidden="true"></i> +977
              9851412977
            </h3>
            <h3 className="email">
              <i class="fa fa-envelope" aria-hidden="true"></i> vesuns@gmail.com
            </h3>
          </div>
        </div>
        <div className="copyright flex justify-center items-center p-3   bg-gradient-to-r from-[#fdfbfb] via-[#e7e2dd] to-[#ebedee]">
          <div className="copyright-text">
            <h1 className="text-zinc-600">Copyright @{date} Vesun Interior</h1>
          </div>
        </div>
      </footer>

        
    </>
  );
}

export default App;
