
import React from "react";
import { useNavigate } from "react-router-dom";


const reportsList = [
  { id: "pii-lcaf-info", label: "PII /LCAF Information", sl: 1 },
  { id: "pii-lcaf-not-reported", label: "PII /LCAF Information (LC/Contract not reported)", sl: 2 },
  { id: "pii-lcaf-transport", label: "PII /LCAF List (Transport Document Date Before LCA Date)", sl: 3 },
  { id: "lc-date-wise", label: "LC Information (LC Date wise)", sl: 4 },
  { id: "lc-reporting-date-wise", label: "LC Information (Reporting Date wise)", sl: 5 },
  { id: "lc-with-commodity-date-wise", label: "LC Information with commodity (LC Date wise)", sl: 6 },
  { id: "lc-with-commodity-entry-date", label: "LC Information with commodity (Entry Date wise)", sl: 7 },
  { id: "lc-high-valued", label: "LC Information (High valued LC)", isNew: true, sl: 8 },
  { id: "lc-outstanding-detail", label: "LC Outstanding Detail Information", isNew: true, sl: 9 },
  { id: "lc-outstanding-summary", label: "LC Outstanding Summary", isNew: true, sl: 10 },
  { id: "hscode-wise-lc-info", label: "HSCODE WISE LC Information", sl: 11 },
  { id: "lc-payment-be-amount", label: "LC wise LC, Payment and BE Amount", sl: 12 },
  { id: "bill-entry-date-wise", label: "Bill of Entry Information (Bill Date wise)", sl: 13 },
  { id: "bill-entry-imp-match", label: "Bill of Entry Matching with IMP", sl: 14 },
  { id: "bill-entry-imp-match-entry-date", label: "Bill of entry Matching with IMP (Based on Entry Date)", sl: 15 },
  { id: "bill-entry-not-reported-by-bank", label: "Bill of Entry found from CUSTOMS but LC is not reported by Bank", sl: 16 },
  { id: "bill-entry-imp-not-matched", label: "Bill of Entry found from CUSTOMS but IMP is not matched by Bank", sl: 17 },
  { id: "bill-entry-overdue", label: "Bill of Entry Reported After IMP Overdue", sl: 18 },
  { id: "bill-entry-shared-by-bank", label: "Bill of Entry Shared/Transferred By Bank**", isNew: true, sl: 19 },
  { id: "bill-entry-shared-to-bank", label: "Bill of Entry Shared/Transferred To Bank**", isNew: true, sl: 20 },
  { id: "imp-report", label: "IMP Report(E2/P2)", sl: 21 },
  { id: "import-status-performance", label: "Import Status/Performance (Finalized Data, Monthly basis)", sl: 22 },
  { id: "ad-branch-entry-date", label: "AD BRANCH WISE IMPORT STATUS (Based on ENTRY DATE)", sl: 23 },
  { id: "ad-branch-txn-date", label: "AD BRANCH WISE IMPORT STATUS (Based on Txn DATE)", sl: 24 },
  { id: "excess-bill-amount", label: "Excess amount of Bill of Entry than IMP amount of Matched IMPs", sl: 25 },
  { id: "imp-refund-details", label: "IMP Refund Details", sl: 26 },
  { id: "imp-payment-date", label: "IMP Information (Based on Payment Date)", sl: 27 },
  { id: "imp-entry-date", label: "IMP Information (Based on Entry Date)", sl: 28 },
  { id: "imp-commodity-payment-date", label: "IMP Information with Commodity (Based on Payment Date)", sl: 29 },
  { id: "hscode-wise-import-payment-date", label: "HSCODE-wise Import Details (Based on Payment Date)**", isNew: true, sl: 30 },
  { id: "bank-wise-imp-stay", label: "Bank-wise IMP Stay Order Information", sl: 31 },
  { id: "e2-p2-rit-report", label: "E2/P2 RIT Report", sl: 32 },
  { id: "importer-wise-performance", label: "Importer-wise Import Performance (Finalized only)", sl: 33 },
  { id: "financial-year-wise-lc", label: "Financial Year wise LC opened by Importer**", isNew: true, sl: 34 },
  { id: "bank-ad-upload-status", label: "Bank-AD wise Data Upload Status", sl: 35 },
  { id: "commodity-wise-importers", label: "Commodity Wise Importers List", sl: 36 },
  { id: "tm-data-entry-date", label: "TM Data From IMP entry (Entry Date wise)", sl: 37 },
  { id: "tm-data-imp-no", label: "TM Data From IMP entry (By IMP_NO)", sl: 38 },
  { id: "lc-excess-payment", label: "LC wise Excess Payment Report", sl: 39 },
  { id: "ambiguous-bill-entry", label: "Ambiguous Bill of Entry Matching Report", sl: 40 },
  { id: "acceptance-date-info", label: "Acceptance Information(Based on Acceptance Date)", sl: 41 },
  { id: "acceptance-reporting-date-info", label: "Acceptance Information(Based on Reporting Date)", sl: 42 },
  { id: "acceptance-outstanding-date", label: "Acceptance Outstanding report (Based on Acceptance Date)", sl: 43 },
  { id: "acceptance-outstanding-maturity", label: "Acceptance Outstanding Report (Based on Maturity Date)", sl: 44 },
  { id: "acceptance-outstanding-summary", label: "Acceptance Outstanding Summary (Branch-wise)", sl: 45 },
  { id: "certificate-oims", label: "Certificate data of OIMS", isNew: true, sl: 46 },
  { id: "lc-outstanding-summary-excluding", label: "LC Outstanding Summary(Excluding Expired LCs)", isNew: true, sl: 47 },
];


  const handleReportClick = (reportId) => {
    console.log("Clicked report ID:", reportId);
   
  };

export default function ReportsComponent() {
  const navigate = useNavigate();

  return (
    <div className="w-full max-w-5xl mx-auto ">
      {/* Title */}
      <h1 className="font-bold border-b border-gray-400  mb-1">
        Import Reports
      </h1>

     
      <button
        onClick={() => navigate(-1)}
        className="bg-blue-800 font-semibold text-white px-4 py-1 ml-5 mb-5 hover:text-yellow-600"
      >
        Back
      </button>

      {/* Section Title */}
      <h2 className=" font-semibold bg-blue-800 text-white px-2 py-1 mb-4 hover:text-yellow-600">
        Foreign Import Reports
      </h2>

<div>
          {reportsList.map((report) => (
          <button
            key={report.id}
            id={report.id}
            onClick={() => handleReportClick(report)}
            className="flex items-center justify-start  "
          >
            <span className="mr-2 ">{report.sl}.</span>
            <span className="underline hover:text-yellow-600 hover:font-semibold">{report.label}</span>
            {report.isNew && (
              <span className="text-red-600 font-bold ml-2">(New)</span>
            )}
          </button>
        ))}
</div>


    </div>
  );
}