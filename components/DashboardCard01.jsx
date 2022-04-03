import React from 'react';

function DashboardCard01() {

  return (
    <div className="flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-white shadow-lg rounded-sm border border-slate-200">
      <div className="px-5 pt-5">
       
        <h2 className="text-lg font-semibold text-slate-800 mb-2">Acme Plus</h2>
        <div className="text-xs font-semibold text-slate-400 uppercase mb-1">Sales</div>
        <div className="flex items-start">
          <div className="text-3xl font-bold text-slate-800 mr-2">$24,780</div>
          <div className="text-sm font-semibold text-white px-1.5 bg-green-500 rounded-full">+49%</div>
        </div>
      </div>
      {/* Chart built with Chart.js 3 */}
      <div className="grow">

      </div>
    </div>
  );
}

export default DashboardCard01;
