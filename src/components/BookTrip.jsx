import React from "react";
import {
  Map,
  Leaf,
  Send,
  Building2,
  Heart,
  FolderCheck,
  CreditCard,
  Plane,
} from "lucide-react";

const BookTrip = () => {
  const steps = [
    {
      icon: (
        <div className="w-12 h-12 bg-[#F0BB1F] rounded-[13px] flex items-center justify-center text-white" data-jc-id="B324AG">
          <FolderCheck size={20} data-jc-id="B32520"/>
        </div>
      ),
      title: "Choose Destination",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.",
    },
    {
      icon: (
        <div className="w-12 h-12 bg-[#F15A2B] rounded-[13px] flex items-center justify-center text-white" data-jc-id="B326KC">
          <CreditCard size={20} data-jc-id="B327BW"/>
        </div>
      ),
      title: "Make Payment",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.",
    },
    {
      icon: (
        <div className="w-12 h-12 bg-[#006380] rounded-[13px] flex items-center justify-center text-white" data-jc-id="B328U1">
          <Plane size={20} data-jc-id="B329LL"/>
        </div>
      ),
      title: "Reach Airport on Selected Date",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.",
    },
  ];

  return (
    <section
      className="container mx-auto px-6 py-10 mb-20 grid lg:grid-cols-2 gap-12 items-center"
      id="bookings"
    data-jc-id="BIR7R9">
      {/* Left Side */}
      <div className="pl-4" data-jc-id="BIR6DD">
        <h3 className="text-[#5E6282] font-semibold text-lg uppercase mb-4" data-jc-id="BIR6AR">
          Easy and Fast
        </h3>
        <h2 className="text-4xl md:text-5xl font-bold font-display text-[#181E4B] mb-12 capitalize leading-tight" data-jc-id="BIR5J2">
          Book your next trip <br data-jc-id="BIR46X"/> in 3 easy steps
        </h2>

        <div className="space-y-10" data-jc-id="BIR42Q">
          {steps.map((step, index) => (
            <div key={index} className="flex gap-6 items-center" data-jc-id="BIR3DQ">
              {step.icon}
              <div data-jc-id="BIR2NS">
                <h4 className="text-[#5E6282] font-bold text-lg mb-1" data-jc-id="BIR2M0">
                  {step.title}
                </h4>
                <p className="text-[#5E6282] leading-relaxed max-w-xs text-sm" data-jc-id="BIR1SW">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Side - Card Mockup */}
      <div className="relative flex justify-center items-center mt-12 lg:mt-0" data-jc-id="BIQK5B">
        {/* Blue Blur Background */}
        <div className="absolute top-0 right-10 w-64 h-64 bg-[#59B1E6] rounded-full blur-[80px] opacity-40 -z-10" data-jc-id="BIQJCX"></div>

        <div className="bg-white rounded-[26px] p-6 shadow-[0px_100px_80px_rgba(0,0,0,0.02),0px_64.8148px_46.8519px_rgba(0,0,0,0.0151852),0px_38.5185px_25.4815px_rgba(0,0,0,0.0121481),0px_20px_13px_rgba(0,0,0,0.01),0px_8.14815px_6.51852px_rgba(0,0,0,0.00785185),0px_1.85185px_3.14815px_rgba(0,0,0,0.00481481)] max-w-[370px] w-full relative z-10 hover:scale-105 transition-transform duration-500" data-jc-id="BIQIKG">
          <div className="h-40 rounded-[24px] overflow-hidden mb-6 relative" data-jc-id="BIQFLP">
            <img
              src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
              alt="Greece"
              className="w-full h-full object-cover"
            data-jc-id="BIQEWQ"/>
          </div>
          <h3 className="text-[#181E4B] font-bold text-xl mb-3 tracking-wide" data-jc-id="BIPX7N">
            Trip To Greece
          </h3>
          <div className="flex items-center space-x-4 text-[#84829A] mb-6 font-medium text-sm" data-jc-id="BIPWF6">
            <span data-jc-id="BIPVOJ">14-29 June</span>
            <span data-jc-id="BIPVLS">|</span>
            <span data-jc-id="BIPVJA">by Robbin joseph</span>
          </div>
          <div className="flex space-x-4 mb-8" data-jc-id="BIPUW4">
            <div className="w-9 h-9 bg-[#F5F5F5] rounded-full flex items-center justify-center text-[#84829A]" data-jc-id="BIPURT">
              <Leaf size={16} data-jc-id="BIPTI2"/>
            </div>
            <div className="w-9 h-9 bg-[#F5F5F5] rounded-full flex items-center justify-center text-[#84829A]" data-jc-id="BIPTDR">
              <Map size={16} data-jc-id="BIPSM3"/>
            </div>
            <div className="w-9 h-9 bg-[#F5F5F5] rounded-full flex items-center justify-center text-[#84829A]" data-jc-id="BIPRZQ">
              <Send size={16} data-jc-id="BIPBMW"/>
            </div>
          </div>
          <div className="flex justify-between items-center mt-2" data-jc-id="BIPBHL">
            <div className="flex items-center space-x-3 text-[#84829A] text-sm font-medium" data-jc-id="BIPATI">
              <Building2 size={18} data-jc-id="BIPA2Y"/>
              <span data-jc-id="BIPA05">24 people going</span>
            </div>
            <Heart size={20} className="text-[#4152CA]" data-jc-id="BIP9CW"/>
          </div>

          {/* Floating Card */}
          <div className="absolute bottom-16 -right-24 bg-white p-4 rounded-[18px] shadow-2xl flex gap-4 w-64 hidden xl:flex" data-jc-id="BIP8LF">
            <div className="w-12 h-12 rounded-full overflow-hidden shrink-0" data-jc-id="BIP7S6">
              <img
                src="https://images.unsplash.com/photo-1552832230-c0197dd311b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
                alt="Rome"
                className="w-full h-full object-cover"
              data-jc-id="BIP737"/>
            </div>
            <div data-jc-id="BIP4YI">
              <span className="text-[#84829A] text-sm font-medium" data-jc-id="BIP4WS">
                Ongoing
              </span>
              <h4 className="text-[#181E4B] font-bold text-lg mb-2" data-jc-id="BIOOJY">
                Trip to rome
              </h4>
              <div className="text-[#181E4B] font-bold text-sm space-y-2" data-jc-id="BIONS6">
                <div data-jc-id="BION3A">
                  <span className="text-[#8A79DF]" data-jc-id="BION0V">40%</span> completed
                </div>
                <div className="w-32 h-1.5 bg-[#F5F5F5] rounded-full overflow-hidden" data-jc-id="BIOMAY">
                  <div className="w-[40%] h-full bg-[#8A79DF] rounded-full" data-jc-id="BIOLL5"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookTrip;
