import React from "react";
import { Link } from "react-router-dom";

const Header=()=>{
    return <>
    <div className="w-full bg-gradient-to-b from-pink-600 to-purple-800 py-4 px-8 flex justify-between items-center">
        <div>
          <img src="/food.svg" alt="Logo" className="w-20 h-12" />
        </div>
        <div className="flex space-x-4 text-white font-bold text-lg font-macondo">
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/how-it-works">How it works</Link>
        </div>
      </div>
    </>
}

export default Header;