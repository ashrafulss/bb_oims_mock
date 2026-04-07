import React from 'react';

const ReportTable = ({ data }) => {
  const headers = [
    "Financial Year", "IRC No", "Importer Name", "Importer Address", 
    "Unlimited Y/N", "Limit In USD", "Limit In Taka", "No Of LC Opened", 
    "LC Amount (USD)", "LC Amount (Taka)", "Payment Amount (USD)", "Payment Amount (Taka)"
  ];

  return (
    <div className="w-full overflow-x-auto border border-gray-400 mt-4">
      {/* Table Header / Title Bar */}
      <div className="bg-[#0066B2] text-white px-2 py-1 font-bold text-sm">
        Importer-wise Yearly LC Summary (All Banks)
      </div>

      <table className="min-w-full border-collapse text-[11px]">
        <thead>
          <tr className="bg-[#B0C4DE] text-black">
            {headers.map((header, index) => (
              <th key={index} className="border border-gray-500 px-1 py-1 text-left font-bold underline cursor-pointer hover:bg-blue-200">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-[#E8F1F8]">
          {data.map((row, idx) => (
            <tr key={idx} className="hover:bg-yellow-100 border-b border-gray-400">
              <td className="border border-gray-400 px-2 py-1 whitespace-nowrap">{row.financialYear}</td>
              <td className="border border-gray-400 px-2 py-1">{row.ircNo}</td>
              <td className="border border-gray-400 px-2 py-1 font-semibold">{row.importerName}</td>
              <td className="border border-gray-400 px-2 py-1 text-[10px]">{row.address}</td>
              <td className="border border-gray-400 px-2 py-1 text-center">{row.unlimited}</td>
              <td className="border border-gray-400 px-2 py-1 text-right">{row.limitUsd}</td>
              <td className="border border-gray-400 px-2 py-1 text-right">{row.limitTaka}</td>
              <td className="border border-gray-400 px-2 py-1 text-center">{row.noOfLc}</td>
              <td className="border border-gray-400 px-2 py-1 text-right font-medium">{row.lcAmountUsd}</td>
              <td className="border border-gray-400 px-2 py-1 text-right">{row.lcAmountTaka}</td>
              <td className="border border-gray-400 px-2 py-1 text-right font-medium">{row.paymentUsd}</td>
              <td className="border border-gray-400 px-2 py-1 text-right">{row.paymentTaka}</td>
            </tr>
          ))}
        </tbody>
      </table>
      
      {/* Footer / Pagination Placeholder */}
      <div className="flex justify-between items-center bg-[#D3D3D3] p-1 text-[11px] border-t border-gray-500">
        <span className="cursor-pointer hover:underline text-blue-800">Download CSV</span>
        <div className="flex items-center gap-2">
           <select className="border border-gray-600 bg-white px-1 outline-none">
              <option>row(s) 1 - 15 of 37</option>
           </select>
           <button className="bg-gray-100 border border-gray-500 px-1 hover:bg-white">▶</button>
        </div>
      </div>
    </div>
  );
};

export default ReportTable;