import React from "react";
import { Send, Mail } from "lucide-react";

const Subscribe = () => {
  return (
    <section
      className="container mx-auto px-6 py-10 mb-20 relative px-4 md:px-20"
      id="subscribe"
    data-jc-id="FMX839">
      <div className="bg-[#DFD7F9] bg-opacity-20 rounded-tl-[129px] rounded-tr-[20px] rounded-bl-[20px] rounded-br-[20px] relative py-16 px-6 md:px-20 text-center overflow-hidden" data-jc-id="FMX8VM">
        {/* Background Decor Circles */}
        <div className="absolute top-0 right-0 opacity-10 pointer-events-none" data-jc-id="FMXAEU">
          <svg width="300" height="300" viewBox="0 0 200 200" data-jc-id="FMXB3V">
            <circle
              cx="150"
              cy="50"
              r="100"
              stroke="#59B1E6"
              strokeWidth="2"
              fill="none"
            data-jc-id="FMXBRU"/>
            <circle
              cx="150"
              cy="50"
              r="80"
              stroke="#59B1E6"
              strokeWidth="2"
              fill="none"
            data-jc-id="FMXCQ9"/>
            <circle
              cx="150"
              cy="50"
              r="60"
              stroke="#59B1E6"
              strokeWidth="2"
              fill="none"
            data-jc-id="FMXE65"/>
          </svg>
        </div>
        <div className="absolute bottom-0 left-0 opacity-10 pointer-events-none transform rotate-180" data-jc-id="CH6ETK">
          <svg width="300" height="300" viewBox="0 0 200 200" data-jc-id="CH6E2Q">
            <circle
              cx="150"
              cy="50"
              r="100"
              stroke="#59B1E6"
              strokeWidth="2"
              fill="none"
            data-jc-id="CH6DER"/>
            <circle
              cx="150"
              cy="50"
              r="80"
              stroke="#59B1E6"
              strokeWidth="2"
              fill="none"
            data-jc-id="CH6BY9"/>
            <circle
              cx="150"
              cy="50"
              r="60"
              stroke="#59B1E6"
              strokeWidth="2"
              fill="none"
            data-jc-id="CH6AHS"/>
          </svg>
        </div>

        <div className="relative z-10 w-full max-w-3xl mx-auto space-y-12" data-jc-id="CH68ZC">
          {/* Floating Send Icon */}
          <div className="absolute -top-10 -right-10 bg-gradient-to-r from-[#747DEF] to-[#5E3BE1] w-16 h-16 rounded-full flex items-center justify-center shadow-2xl hidden lg:flex transform hover:scale-110 transition cursor-pointer" data-jc-id="CH5SMH">
            <Send
              className="text-white transform -rotate-45 translate-x-[-2px] translate-y-[2px]"
              fill="white"
              size={28}
            data-jc-id="CH5QK9"/>
          </div>

          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold font-display text-[#5E6282] leading-relaxed px-4" data-jc-id="CH5P30">
            Subscribe to get information, latest news and other interesting
            offers about Jadoo
          </h2>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center" data-jc-id="CH5NI3">
            <div className="bg-white rounded-[10px] px-6 py-4 flex items-center w-full sm:w-80 shadow-sm border border-transparent focus-within:border-[#F1A501] transition" data-jc-id="CH5MS9">
              <Mail className="text-[#39425D] opacity-40 mr-3" size={20} data-jc-id="CH55S4"/>
              <input
                type="email"
                placeholder="Your email"
                className="w-full text-base text-[#39425D] outline-none placeholder:text-[#39425D] placeholder:opacity-40"
              data-jc-id="CH55LX"/>
            </div>
            <button className="bg-[#FF7D68] text-white rounded-[10px] px-10 py-4 font-semibold hover:bg-[#ff644c] transition shadow-lg shadow-[#FF7D68]/30 w-full sm:w-auto text-base" data-jc-id="CH53I7">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
