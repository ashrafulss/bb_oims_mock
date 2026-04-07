import React, { useState } from 'react';

const ReportTable = ({ data }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [rowsPerPage] = useState(15);

    const headers = [
        "Financial Year", "IRC No", "Importer Name", "Importer Address",
        "Unlimited Y/N", "Limit In USD", "Limit In Taka", "No Of LC Opened",
        "LC Amount (USD)", "LC Amount (Taka)", "Payment Amount (USD)", "Payment Amount (Taka)"
    ];

    const indexOfLastRow = currentPage * rowsPerPage;
    const indexOfFirstRow = indexOfLastRow - rowsPerPage;
    const currentRows = data.slice(indexOfFirstRow, indexOfLastRow);
    const totalPages = Math.ceil(data.length / rowsPerPage);


    const downloadCSV = () => {

        const csvHeaders = [
            "Financial Year", "IRC No", "Importer Name", "Importer Address",
            "Unlimited Y/N", "Limit In USD", "Limit In Taka", "No Of LC Opened",
            "LC Amount (USD)", "LC Amount (Taka)", "Payment Amount (USD)", "Payment Amount (Taka)"
        ];


        const csvRows = data.map(row => [
            row.financialYear,
            `"${row.ircNo}"`,
            `"${row.importerName}"`,
            `"${row.address}"`,
            row.unlimited,
            row.limitUsd.replace(/,/g, ''),
            row.limitTaka.replace(/,/g, ''),
            row.noOfLc,
            row.lcAmountUsd.replace(/,/g, ''),
            row.lcAmountTaka.replace(/,/g, ''),
            row.paymentUsd.replace(/,/g, ''),
            row.paymentTaka.replace(/,/g, '')
        ].join(","));


        const csvContent = [csvHeaders.join(","), ...csvRows].join("\n");

        const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.setAttribute("href", url);
        link.setAttribute("download", `LC_Summary_${new Date().getTime()}.csv`);
        link.style.visibility = 'hidden';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div id="reportTableContainer" className="w-full overflow-x-auto border border-gray-400 mt-4 shadow-sm">
            <div id="tableHeaderTitle" className="bg-[#0066B2] text-white px-2 py-1 font-bold text-sm">
                Importer-wise Yearly LC Summary (All Banks)
            </div>

            <table id="lcSummaryTable" name="lcSummaryTable" className="min-w-full border-collapse text-[11px]">
                <thead>
                    <tr className="bg-[#B0C4DE] text-black">
                        {headers.map((header, index) => (
                            <th
                                key={index}
                                id={`header-${header.replace(/\s+/g, '').toLowerCase()}`}
                                className="border border-gray-500 px-1 py-1 text-left font-bold underline whitespace-nowrap"
                            >
                                {header}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody id="tableBodyContent" className="bg-[#E8F1F8]">
                    {currentRows.map((row, idx) => (
                        <tr key={idx} id={`row-${idx}`} className="hover:bg-yellow-100 border-b border-gray-400">
                            <td id={`year-${idx}`} className="border border-gray-400 px-2 py-1 whitespace-nowrap">{row.financialYear}</td>
                            <td id={`irc-${idx}`} className="border border-gray-400 px-2 py-1">{row.ircNo}</td>
                            <td id={`name-${idx}`} className="border border-gray-400 px-2 py-1 font-semibold">{row.importerName}</td>
                            <td id={`address-${idx}`} className="border border-gray-400 px-2 py-1 text-[10px]">{row.address}</td>
                            <td id={`unlimited-${idx}`} className="border border-gray-400 px-2 py-1 text-center">{row.unlimited}</td>
                            <td id={`limitUsd-${idx}`} className="border border-gray-400 px-2 py-1 text-right">{row.limitUsd}</td>
                            <td id={`limitTaka-${idx}`} className="border border-gray-400 px-2 py-1 text-right">{row.limitTaka}</td>
                            <td id={`noOfLc-${idx}`} className="border border-gray-400 px-2 py-1 text-center">{row.noOfLc}</td>
                            <td id={`lcAmountUsd-${idx}`} className="border border-gray-400 px-2 py-1 text-right font-medium">{row.lcAmountUsd}</td>
                            <td id={`lcAmountTaka-${idx}`} className="border border-gray-400 px-2 py-1 text-right">{row.lcAmountTaka}</td>
                            <td id={`paymentUsd-${idx}`} className="border border-gray-400 px-2 py-1 text-right font-medium">{row.paymentUsd}</td>
                            <td id={`paymentTaka-${idx}`} className="border border-gray-400 px-2 py-1 text-right">{row.paymentTaka}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <div id="tableFooterContainer" className="flex justify-between items-center bg-[#D3D3D3] p-1 text-[11px] border-t border-gray-500">
                <button
                    id="btnDownloadCsv"
                    name="btnDownloadCsv"
                    onClick={downloadCSV}
                    className="cursor-pointer hover:underline text-blue-800 font-medium bg-transparent border-none"
                >
                    Download CSV
                </button>

                <div className="flex items-center gap-2">
                    <select
                        id="pageRangeSelect"
                        name="pageRangeSelect"
                        className="border border-gray-600 bg-white px-1 outline-none h-5"
                        value={`${indexOfFirstRow + 1} - ${Math.min(indexOfLastRow, data.length)}`}
                        onChange={(e) => {
                            const start = parseInt(e.target.value.split(' - ')[0]);
                            setCurrentPage(Math.floor(start / rowsPerPage) + 1);
                        }}
                    >
                        {Array.from({ length: totalPages }, (_, i) => {
                            const start = i * rowsPerPage + 1;
                            const end = Math.min((i + 1) * rowsPerPage, data.length);
                            const rangeLabel = `${start} - ${end}`;
                            return (
                                <option key={i} id={`optRange-${i}`} value={rangeLabel}>
                                    row(s) {rangeLabel} of {data.length}
                                </option>
                            );
                        })}
                    </select>

                    <div id="paginationNavGroup" className="flex border border-gray-500">
                        <button
                            id="btnPrevPage"
                            name="btnPrevPage"
                            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                            disabled={currentPage === 1}
                            className="bg-gray-100 px-2 hover:bg-white border-r border-gray-500 disabled:opacity-50"
                        >
                            ◀
                        </button>
                        <button
                            id="btnNextPage"
                            name="btnNextPage"
                            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                            disabled={currentPage === totalPages}
                            className="bg-gray-100 px-2 hover:bg-white disabled:opacity-50"
                        >
                            ▶
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReportTable;