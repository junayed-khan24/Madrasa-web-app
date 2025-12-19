import React from "react";
import Logo from '../../../src/assets/জামিয়া_ইসলামিয়া_মোমেনশাহীর_লোগো.jpeg'

const Header = () => {
  return (
    <header className="bg-[#0b3d2e] text-white ">
      <div className=" px-6 md:px-20 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">

          {/* Left Section */}
          <div className="text-center md:text-left">
            <h1 className="text-xl md:text-3xl font-bold">
              Al-Jamiatul Islamia Momenshahi
            </h1>
            <p className="text-sm opacity-90">
             Sahora,Mymensingh,  Bangladesh
            </p>
            <p className=" text-2xl font-semibold mt-3">
              আল-জামিয়াতুল ইসলামিয়া মোমেনশাহী
            </p>
            <p className="text-sm">
                সেহড়া, ময়মনসিংহ, বাংলাদেশ
            </p>
          </div>

          {/* Center Logo */}
          <div className="flex justify-center">
            <img
              src={Logo}
              alt="Institution Logo"
              className="w-31 h-31 object-contain rounded-full border-4 border-white"
            />
          </div>

          {/* Right Arabic Section */}
          <div className="text-center md:text-right">
            <h2 className="text-lg md:text-4xl font-arabic leading-relaxed">
                الجامعة الإسلامية مومنشاهي
            </h2>
            <p className="text-sm opacity-90">
                سهرا، ميمينسينغ، بنغلاديش
            </p>
          </div>

        </div>
      </div>
    </header>
  );
};

export default Header;
