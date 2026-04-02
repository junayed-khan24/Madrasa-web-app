import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import img from "../../src/assets/Motin-Hujur.jpg";

const teamData = [
  {
    id: 1,
    name: "আব্দুল কাইয়ুম",
    role: "মুহতামিম / প্রিন্সিপl",
    img: img,
  },
  {
    id: 2,
    name: "মাওলানা আনোয়ারুল হক",
    role: "শিক্ষা সচিব",
    img: img,
  },
  {
    id: 3,
    name: "মুফতি ইব্রাহিম",
    role: "সহকারী শিক্ষক",
    img: img,
  },
  {
    id: 4,
    name: "মাওলানা মাকসুদুল হক",
    role: "মুহাদ্দিস",
    img: img,
  },
  {
    id: 5,
    name: "মাওলানা নাসির উদ্দিন",
    role: "সহকারী শিক্ষক",
    img: img,
  },
  {
    id: 6,
    name: "এহতেশামুল হক",
    role: "সহকারী শিক্ষক",
    img: img,
  },
   {
    id: 1,
    name: "আব্দুল কাইয়ুম",
    role: "মুহতামিম / প্রিন্সিপাল",
    img: img,
  },
  {
    id: 2,
    name: "মাওলানা আনোয়ারুল হক",
    role: "শিক্ষা সচিব",
    img: img,
  },
  {
    id: 3,
    name: "মুফতি ইব্রাহিম",
    role: "সহকারী শিক্ষক",
    img: img,
  },
  {
    id: 4,
    name: "মাওলানা মাকসুদুল হক",
    role: "মুহাদ্দিস",
    img: img,
  },
  {
    id: 5,                                    
    name: "মাওলানা নাসির উদ্দি",
    role: "সহকারী শিক্ষক",
    img: img,
  },
  {
    id: 6,
    name: "এহতেশামুল ",
    role: "সহকারী শিক্ষ",
    img: img,
  },
];


const Profile = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <div className="bg-base-200 py-12 px-4">
      <div className="max-w-7xl mx-auto">

        {/* Title */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold">Our Team</h2>
          <p className="text-gray-500 mt-2">
            Meet our professional team members
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {teamData.map((member) => (
            <div
              key={member.id}
              data-aos="fade-up"
              className="card bg-base-100 shadow-md hover:shadow-xl transition duration-300 border border-gray-200 hover:border-primary"
            >
              <div className="card-body items-center text-center">

                {/* Image */}
                <div className="w-24 h-24 rounded-full overflow-hidden mb-4 border-2 border-gray-300">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover hover:scale-110 transition duration-300"
                  />
                </div>

                {/* Name */}
                <h3 className="font-semibold text-lg">
                  {member.name}
                </h3>

                {/* Role */}
                <p className="text-sm text-gray-500">
                  {member.role}
                </p>

              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Profile;