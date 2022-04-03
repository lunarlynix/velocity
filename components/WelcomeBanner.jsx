import React from 'react';

function WelcomeBanner() {
  return (
    <div className="relative bg-blue-200 p-4 sm:p-6 rounded-sm overflow-hidden mb-8">
      {/* Content */}
      <div className="relative">
        <h1 className="text-2xl md:text-3xl text-slate-800 font-bold mb-1">🚀 Welcome to Velocity v1.0.0!</h1>
        <p>Welcome to Velocity, our team is ready to present you Velocity v1.0!</p>
      </div>

    </div>
  );
}

export default WelcomeBanner;
