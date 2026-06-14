import React from 'react';

const Bookings = () => {
  return (
    <div className="container mx-auto px-6 py-20 mt-20" data-jc-id="W4OZ11">
      <h1 className="text-4xl font-bold font-display text-[#181E4B] mb-8 text-center" data-jc-id="1LXI1F">My Bookings</h1>
       <div className="bg-white rounded-lg shadow-lg p-8 min-h-[400px] flex flex-col items-center justify-center text-center" data-jc-id="1LXHA1">
        <p className="text-gray-500 text-xl mb-4" data-jc-id="1LXGHE">View and manage all your upcoming trips.</p>
        <div className="p-4 border border-dashed border-gray-300 rounded-md bg-gray-50 max-w-md w-full" data-jc-id="1LXFQU">
            <span className="text-gray-400" data-jc-id="1LXEZB">No active bookings found.</span>
        </div>
      </div>
    </div>
  );
};

export default Bookings;
