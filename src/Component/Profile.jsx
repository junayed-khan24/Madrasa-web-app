import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const teamData = [
  {
    id: 1,
    name: "David Namdar",
    role: "Chief Executive Officer",
    img: "https://i.pravatar.cc/150?img=1",
  },
  {
    id: 2,
    name: "Tony McDonald",
    role: "Chairman of the Board & President",
    img: "https://i.pravatar.cc/150?img=2",
  },
  {
    id: 3,
    name: "Russell Read",
    role: "Independent Director",
    img: "https://i.pravatar.cc/150?img=3",
  },
  {
    id: 4,
    name: "Nick Etten",
    role: "Independent Director",
    img: "https://i.pravatar.cc/150?img=4",
  },
  {
    id: 5,
    name: "Carly Howard",
    role: "Independent Director",
    img: "https://i.pravatar.cc/150?img=5",
  },
  {
    id: 6,
    name: "Annemarie Tierney",
    role: "Independent Director",
    img: "https://i.pravatar.cc/150?img=6",
  },
  {
    id: 7,
    name: "Hans Thomas",
    role: "Director",
    img: "https://i.pravatar.cc/150?img=7",
  },
  {
    id: 8,
    name: "Renee Larson",
    role: "VP Finance / Controller",
    img: "https://i.pravatar.cc/150?img=8",
  },
  {
    id: 9,
    name: "Jordan Vedoya",
    role: "President Fat Panda Ltd.",
    img: "https://i.pravatar.cc/150?img=9",
  },
  {
    id: 10,
    name: "Omar Hussein",
    role: "Advisor",
    img: "https://i.pravatar.cc/150?img=10",
  },
  {
    id: 11,
    name: "Jon Najarian",
    role: "Advisor",
    img: "https://i.pravatar.cc/150?img=11",
  },
  {
    id: 12,
    name: "Marc LoPresti",
    role: "Advisor",
    img: "https://i.pravatar.cc/150?img=12",
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