import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
        
        {/* Brand Info */}
        <div>
          <h2 className="text-3xl font-bold mb-4">
            হাতের সূতোর ছোঁয়ায়
          </h2>
          <p className="text-gray-400 leading-relaxed">
            ভালোবাসা ও যত্নে তৈরি এক্সক্লুসিভ হ্যান্ড এমব্রয়ডারি পোশাক, 
            শাড়ি, থ্রি-পিস এবং হোম ডেকর আইটেম। 
            প্রতিটি ডিজাইনে রয়েছে ঐতিহ্য ও নিখুঁত কারুকার্যের ছোঁয়া।
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-400">
            <li className="hover:text-white cursor-pointer">এক্সক্লুসিভ কালেকশন</li>
            <li className="hover:text-white cursor-pointer">আমাদের বিশেষ সংগ্রহ</li>
            <li className="hover:text-white cursor-pointer">নতুন সংযোজন</li>
            <li className="hover:text-white cursor-pointer">যোগাযোগ</li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="text-center md:text-right">
          <h3 className="text-xl font-semibold mb-4">যোগাযোগ করুন</h3>
          
          {/* Big Mobile Number */}
          <p className="text-3xl md:text-4xl font-bold text-rose-500 mb-4">
            📞 01920-603172
          </p>

          <p className="text-gray-400">
            অর্ডার বা যেকোনো তথ্যের জন্য সরাসরি কল করুন।
          </p>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Latifa Hand Embroidery Store. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;