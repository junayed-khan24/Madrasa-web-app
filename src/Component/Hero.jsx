import { useEffect, useState } from "react";

const images = [
  "/images/madrasa1.jpg",
  "/images/madrasa2.jpg",
  "/images/madrasa3.jpg",
];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full bg-base-100 py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          
          {/* Image Slider */}
          <div className="relative w-full h-[260px] sm:h-[320px] md:h-[380px] lg:h-[420px] overflow-hidden rounded-xl shadow-lg">
            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt="Hero"
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
                  current === index ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}
          </div>

          {/* Content */}
          <div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-green-900 mb-4">
              জামিয়া আল ইসলামিয়া সংক্ষিপ্ত পরিচিতি
            </h2>

            <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6">
             আল জামিয়া আল ইসলামিয়া ময়মনসিংহ (জামিয়া ইসলামিয়া মোমেনশাহী নামেও পরিচিত) ময়মনসিংহ জেলার চরপাড়ায় অবস্থিত একটি কওমি মাদ্রাসা। ১৯৪২ সালে মনজুরুল হক ও নেওয়াজ আলীর নেতৃত্বে শহর ও শহরতলীর আলেম ও স্থানীয় ব্যক্তিবর্গের সহযোগিতায় এই মাদ্রাসাটি প্রতিষ্ঠা করা হয়। মাদ্রাসার জমি দান করেন নেওয়াজ আলীর সহধর্মিণী রহমজান খাতুন। শুরুতে মাদ্রাসার নাম ছিল ‘দারুল উলুম’। ১৯৭৬ সালে আশরাফ আলী থানভীর খলিফা আতহার আলী মাদ্রাসার পৃষ্ঠপোষকতার দায়িত্ব গ্রহণের পর মাদ্রাসার নাম পরিবর্তন করে বর্তমান নামটি রাখা হয়। প্রতিষ্ঠালগ্ন থেকে মাদ্রাসার অগ্রগতিতে মাওলানা সৈয়দ ফয়জুর রহমান রহ. এবং মাওলানা মিয়া হোসাইন রহ. সহ প্রমুখ আলেম গুরুত্বপূর্ণ ভূমিকা পালন করেছেন। মাদ্রাসার বর্তমান মহাপরিচালক মাওলানা আনওয়ারুল হক।
            </p>

            <button className="btn btn-success text-white px-8">
              বিস্তারিত
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
