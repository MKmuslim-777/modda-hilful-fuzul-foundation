import React from "react";
import { Link, NavLink } from "react-router";
import logo from "../../assets/MODDA-LOGO.png";
import { FaFacebook } from "react-icons/fa";
import { BsGithub, BsLinkedin } from "react-icons/bs";

const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="bg-[#1f2b37] text-white p-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="space-y-4">
            <Link to={"/"} className="flex items-center">
              <img src={logo} className="w-[160px]" alt="" />
              <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"></span>
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed">
              মোড্ডা হিলফুল ফুজুল ফাউন্ডেশন একটি অলাভজনক ও সেবামূলক প্রতিষ্ঠান,
              যার মূল লক্ষ্য হলো মানবতার কল্যাণে কাজ করা এবং সমাজে ন্যায়,
              সহানুভূতি ও ভ্রাতৃত্বের বন্ধন গড়ে তোলা।
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-lg mb-4 text-blue-300">মেনু</h3>
              <ul className="space-y-2">
                <li>
                  <Link className="text-gray-300 hover:text-white transition-colors duration-200 text-sm">
                    আমাদের সম্পর্কে
                  </Link>
                </li>
                {/* <li>
                  <Link className="text-gray-300 hover:text-white transition-colors duration-200 text-sm">
                    আমাদের উদ্দেশ্য
                  </Link>
                </li> */}
                <li>
                  <Link className="text-gray-300 hover:text-white transition-colors duration-200 text-sm">
                    আমাদের কার্যক্রম
                  </Link>
                </li>
                <li>
                  <Link className="text-gray-300 hover:text-white transition-colors duration-200 text-sm">
                    ব্লগ
                  </Link>
                </li>
                <li>
                  <Link className="text-gray-300 hover:text-white transition-colors duration-200 text-sm">
                    গ্যালারি
                  </Link>
                </li>
              </ul>
            </div>
            {/* অন্যান্য */}
            <div>
              <h3 className="font-semibold text-lg mb-4 text-blue-300">
                অন্যান্য
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link className="text-gray-300 hover:text-white transition-colors duration-200 text-sm">
                    যোগাযোগ
                  </Link>
                </li>
                <li>
                  <Link className="text-gray-300 hover:text-white transition-colors duration-200 text-sm">
                    পরিষেবার শর্তাবলী
                  </Link>
                </li>
                <li>
                  <Link className="text-gray-300 hover:text-white transition-colors duration-200 text-sm">
                    গোপনীয়তা নীতি
                  </Link>
                </li>
                {/* <li>
                  <Link className="text-gray-300 hover:text-white transition-colors duration-200 text-sm">
                    Digital Marketing
                  </Link>
                </li>
                <li>
                  <Link className="text-gray-300 hover:text-white transition-colors duration-200 text-sm">
                    Cloud Solutions
                  </Link>
                </li> */}
              </ul>
            </div>{" "}
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-lg text-blue-300">Follow Us</h3>
            <div className="flex space-x-4">
              <FaFacebook className="text-2xl" />
              <BsGithub className="text-2xl" />
              <BsLinkedin className="text-2xl" />
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-600 my-6"></div>

        {/* Bottom Section - Copyright */}
        <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0">
          <div className="text-gray-300 text-center text-sm">
            স্বত্ব © {currentYear} মোড্ডা হিলফুল ফুজুল ফাউন্ডেশন. সর্ব স্বত্ব
            সংরক্ষিত।
          </div>
          {/* <div className="flex space-x-6 text-sm">
            <Link className="text-gray-300 hover:text-white transition-colors duration-200">
              Privacy Policy
            </Link>
            <Link className="text-gray-300 hover:text-white transition-colors duration-200">
              Terms of Service
            </Link>
            <Link className="text-gray-300 hover:text-white transition-colors duration-200">
              Cookie Policy
            </Link>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
