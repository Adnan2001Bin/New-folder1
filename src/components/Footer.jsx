import React from "react";
import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="container mx-auto px-6 py-10 mb-10 text-[#5E6282] mt-20" data-jc-id="A92KFU">
      <div className="grid md:grid-cols-4 gap-8 mb-16" data-jc-id="A92JQ7">
        {/* Brand */}
        <div className="md:col-span-1 space-y-6" data-jc-id="A92JJB">
          <h2 className="text-4xl font-bold font-display text-[#181E4B]" data-jc-id="A92IWV">
            Jadoo.
          </h2>
          <p className="text-sm leading-loose max-w-xs font-medium" data-jc-id="A92I5C">
            Book your trip in minute, get full Control for much longer.
          </p>
        </div>

        {/* Links */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 md:col-span-2" data-jc-id="A92GOR">
          <div className="space-y-6" data-jc-id="A92FZS">
            <h4 className="font-bold text-[#080809] text-xl" data-jc-id="A92FWC">Company</h4>
            <ul className="space-y-3 font-medium" data-jc-id="A92F84">
              <li data-jc-id="A92F35">
                <a href="#" className="hover:text-[#DF6951] transition" data-jc-id="A92EJB">
                  About
                </a>
              </li>
              <li data-jc-id="XORF8U">
                <a href="#" className="hover:text-[#DF6951] transition" data-jc-id="XORF73">
                  Careers
                </a>
              </li>
              <li data-jc-id="XORDUX">
                <a href="#" className="hover:text-[#DF6951] transition" data-jc-id="XORDT6">
                  Mobile
                </a>
              </li>
            </ul>
          </div>
          <div className="space-y-6" data-jc-id="XORCWI">
            <h4 className="font-bold text-[#080809] text-xl" data-jc-id="XORCAZ">Contact</h4>
            <ul className="space-y-3 font-medium" data-jc-id="XORBMR">
              <li data-jc-id="XORBHS">
                <a href="#" className="hover:text-[#DF6951] transition" data-jc-id="XORBG1">
                  Help/FAQ
                </a>
              </li>
              <li data-jc-id="XORA3U">
                <a href="#" className="hover:text-[#DF6951] transition" data-jc-id="XORA23">
                  Press
                </a>
              </li>
              <li data-jc-id="XOR98N">
                <a href="#" className="hover:text-[#DF6951] transition" data-jc-id="XOR8O8">
                  Affiliates
                </a>
              </li>
            </ul>
          </div>
          <div className="space-y-6" data-jc-id="XOQS6V">
            <h4 className="font-bold text-[#080809] text-xl" data-jc-id="XOQRLC">More</h4>
            <ul className="space-y-3 font-medium" data-jc-id="XOQRFA">
              <li data-jc-id="XOQQST">
                <a href="#" className="hover:text-[#DF6951] transition" data-jc-id="XOQQR2">
                  Airlinefees
                </a>
              </li>
              <li data-jc-id="XOQPWV">
                <a href="#" className="hover:text-[#DF6951] transition" data-jc-id="XOQPCG">
                  Airline
                </a>
              </li>
              <li data-jc-id="XOQOIY">
                <a href="#" className="hover:text-[#DF6951] transition" data-jc-id="XOQOH7">
                  Low fare tips
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Social + App */}
        <div className="space-y-8" data-jc-id="XOQMY5">
          <div className="flex space-x-6" data-jc-id="XOQMCO">
            <button className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-[#DF6951] transition-all group" data-jc-id="XOQM8I">
              <Facebook
                size={20}
                className="group-hover:text-white text-black transition-colors"
              data-jc-id="XOQ5AU"/>
            </button>
            <button className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-[#DF6951] transition-all group" data-jc-id="XOQ4ES">
              <Instagram
                size={20}
                className="group-hover:text-white text-black transition-colors"
              data-jc-id="XOQ31P"/>
            </button>
            <button className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-[#DF6951] transition-all group" data-jc-id="XOQ1MY">
              <Twitter
                size={20}
                className="group-hover:text-white text-black transition-colors"
              data-jc-id="XOQ0RY"/>
            </button>
          </div>
          <h4 className="text-xl text-[#5E6282] font-medium" data-jc-id="XOPZC9">
            Discover our app
          </h4>
          <div className="flex flex-col sm:flex-row gap-4" data-jc-id="XOPYKS">
            <button className="bg-black text-white px-6 py-2 rounded-full flex items-center space-x-2 hover:bg-[#333] transition w-fit" data-jc-id="XOPICW">
              <div className="text-white text-xl font-bold" data-jc-id="XOPHIS">▶</div>
              <div className="text-left" data-jc-id="XOPGUQ">
                <div className="text-[10px] uppercase font-semibold" data-jc-id="XOPGR6">
                  Get it on
                </div>
                <div className="font-bold text-xs" data-jc-id="XOPFYQ">Google Play</div>
              </div>
            </button>
            <button className="bg-black text-white px-6 py-2 rounded-full flex items-center space-x-2 hover:bg-[#333] transition w-fit" data-jc-id="XOPF78">
              <div className="text-white text-xl font-bold" data-jc-id="XOPDV1"></div>
              <div className="text-left" data-jc-id="XOPD6Z">
                <div className="text-[10px] uppercase font-semibold" data-jc-id="XOPD3F">
                  Available on the
                </div>
                <div className="font-bold text-xs" data-jc-id="XOPCA7">Apple Store</div>
              </div>
            </button>
          </div>
        </div>
      </div>

      <div className="text-center pt-8 mt-8" data-jc-id="XOOVCL">
        <p className="font-medium text-sm text-[#5E6282]" data-jc-id="XOOV8C">
          All rights reserved@jadoo.co
        </p>
      </div>
    </footer>
  );
};

export default Footer;
