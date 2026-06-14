import React from "react";
import { Play } from "lucide-react";

const Hero = () => {
  return (
    <section className="container mx-auto px-6 py-10 grid md:grid-cols-2 gap-12 items-center relative mb-20" data-jc-id="QW7C81">
      {/* Background Blob - Left (Abstract) */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#D5AEE4] rounded-full blur-[100px] -z-10 opacity-30 -translate-x-1/2 -translate-y-1/2" data-jc-id="QW7D3W"></div>

      <div className="space-y-6 z-10 relative" data-jc-id="QW7EH2">
        {/* Underline decoration SVG approx */}
        <div className="absolute -z-10 top-20 right-10 hidden md:block" data-jc-id="QW7F7P">
          {/* decorative element */}
        </div>

        <p className="text-[#DF6951] font-bold text-lg uppercase tracking-wide" data-jc-id="QW7G0A">
          Best Destinations around the world
        </p>
        <h1 className="text-5xl md:text-6xl lg:text-[84px] font-bold font-display leading-tight text-[#181E4B]" data-jc-id="QW7GUE">Travel, enjoy and live a new and full lifesdfsd</h1>
        <p className="text-[#5E6282] text-base md:text-lg leading-relaxed max-w-md" data-jc-id="QW7IA2">
          Built Wicket longer admire do barton vanity itself do in it. Preferred
          to sportsmen it engrossed listening. Park gate sell they west hard for
          the.
        </p>
        <div className="flex items-center space-x-8 pt-4" data-jc-id="IN137Z">
          <button className="bg-[#F1A501] text-white px-8 py-3 rounded-lg shadow-lg shadow-[#F1A501]/30 hover:bg-[#e09800] transition transform hover:-translate-y-1" data-jc-id="IN132S">
            Find out more
          </button>
          <button className="flex items-center space-x-4 text-[#5E6282] hover:text-[#181E4B] transition group" data-jc-id="IN112D">
            <div className="w-12 h-12 bg-[#DF6951] rounded-full flex items-center justify-center shadow-lg shadow-[#DF6951]/40 text-white group-hover:scale-110 transition-transform" data-jc-id="IN10A4">
              <Play size={16} fill="white" className="ml-1" data-jc-id="IN0YUB"/>
            </div>
            <span className="font-medium" data-jc-id="IN0YNF">Play Demo</span>
          </button>
        </div>
      </div>

      <div className="relative z-10 md:h-[700px] flex items-center justify-center" data-jc-id="IN0XWO">
        {/* Background Graphic */}
        <div
          className="absolute inset-0 bg-contain bg-no-repeat bg-center z-0"
          style={{
            backgroundImage:
              "url('https://raw.githubusercontent.com/devscomrade/jadoo-landing-page/main/src/assets/hero-img.png')",
          }}
        data-jc-id="IN0H1K"></div>
        {/* Using a specific placeholder that looks like the design if possible, or just a generic one. 
                     The design has a girl sitting on a suitcase. 
                     I'll try to find a similar image on Unsplash or just use a generic travel one. */}
        <img
          src="https://images.unsplash.com/photo-1530789253388-582c481c54b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
          alt="Travel"
          className="relative z-10 w-[80%] h-auto object-contain drop-shadow-2xl rounded-2xl"
        data-jc-id="IN0D6W"/>
      </div>
      {/* Background Blob - Right */}
      <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-[#FFF1DA] rounded-full blur-3xl -z-10 opacity-70 translate-x-1/4 -translate-y-1/4" data-jc-id="IN0AX8"></div>
    </section>
  );
};

export default Hero;
