import React, { useState } from "react";

const IRCWiseLCSummary = () => {
  const [formData, setFormData] = useState({
    searchType: "irc",
    importArea: "01",
    searchValue: "",
    year: "2025-26",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleBack = (e) => {
    console.log("Back clicked", e.target.id, e.target.name);
  };

  const handleSubmit = (e) => {
    console.log("Submit clicked", e.target.id, e.target.name);
    console.log("Form Data:", formData);
  };

  return (
    <div className="border border-gray-400 rounded shadow w-full max-w-md bg-gray-100">

      {/* Header */}
      <div className="flex justify-between items-center mb-2 bg-blue-800 text-white px-2 py-1">
        <span className="font-semibold text-sm">
          Report Parameter (IRC wise LC Summary)
        </span>

        <div className="flex gap-2">
          <button
            id="backBtn"
            name="backBtn"
            onClick={handleBack}
            className="
              bg-blue-800 text-white px-2 py-1 border font-semibold
              border-t-yellow-200 border-l-yellow-200 
              border-b-black border-r-black
              hover:text-yellow-600
              active:translate-y-1 active:scale-95
              transition-all duration-150
            "
          >
            Back
          </button>

          <button
            id="submitBtn"
            name="submitBtn"
            onClick={handleSubmit}
            className="
              bg-blue-800 text-white px-2 py-1 border font-semibold
              border-t-yellow-200 border-l-yellow-200 
              border-b-black border-r-black
              hover:text-yellow-600
              active:translate-y-1 active:scale-95
              transition-all duration-150
            "
          >
            Submit
          </button>
        </div>
      </div>

      {/* Search Type */}
      <div className="flex items-center justify-center">
        <div className="flex items-center">
          <span className="font-medium text-red-500 text-lg">*</span>
          <span className="underline ml-1">
            Search by Name or IRC:
          </span>
        </div>

        <label className="ml-2" htmlFor="searchTypeIrc">
          <input
            id="searchTypeIrc"
            name="searchType"
            type="radio"
            value="irc"
            checked={formData.searchType === "irc"}
            onChange={handleChange}
            className="mr-1"
          />
          Search by IRC No
        </label>

        <label className="ml-2" htmlFor="searchTypeName">
          <input
            id="searchTypeName"
            name="searchType"
            type="radio"
            value="name"
            checked={formData.searchType === "name"}
            onChange={handleChange}
            className="mr-1"
          />
          Search by Name
        </label>
      </div>

      {/* Form Body */}
      <div className="w-full max-w-lg mx-auto p-4 bg-[#f0f0f0] ">

        <div className="flex flex-col gap-2">

          {/* Import Area */}
          <div className="flex items-center justify-center">
            <label
              htmlFor="importArea"
              className="w-1/3 text-right pr-2 font-medium underline"
            >
              Import Area
            </label>

            <div className="w-2/3">
              <select
                id="importArea"
                name="importArea"
                value={formData.importArea}
                onChange={handleChange}
                className="border border-gray-600 bg-white w-full px-1 outline-none"
              >
                <option value="01">Non-EPZ</option>
                <option value="02">Chittagong EPZ, Chittagong</option>
                <option value="03">Dhaka EPZ, Dhaka</option>
                <option value="04">Adamji EPZ, Narayanganj</option>
                <option value="05">Comilla EPZ, Comilla</option>
                <option value="06">Ishwardi EPZ, Pabna</option>
                <option value="07">Uttara EPZ, Nilphamary</option>
                <option value="08">Korean EPZ, Chittagong</option>
                <option value="10">Mongla EPZ, Khulna</option>
                <option value="11">Karnafuli EPZ, Chittagong</option>
                <option value="12">BEPZA EZ-1, Mirsarai</option>
                <option value="13">EZ-Mirsarai</option>
                <option value="14">MEGHNA INDUSTRIAL ECONOMIC ZONE</option>
              </select>
            </div>
          </div>

          {/* Search Value */}
          <div className="flex items-center justify-center">
            <label
              htmlFor="searchValue"
              className="w-1/3 text-right pr-2 font-medium underline uppercase"
            >
              Search Value
            </label>

            <div className="w-2/3">
              <input
                id="searchValue"
                name="searchValue"
                type="text"
                value={formData.searchValue}
                onChange={handleChange}
                className="border border-gray-600 bg-white w-60 px-1 outline-none"
              />
            </div>
          </div>

          {/* Year */}
          <div className="flex items-center justify-center">
            <label
              htmlFor="year"
              className="w-1/3 text-right pr-2 font-medium underline"
            >
              Year
            </label>

            <div className="w-2/3">
              <select
                id="year"
                name="year"
                value={formData.year}
                onChange={handleChange}
                className="border border-gray-600 bg-white w-40 px-1 outline-none"
              >
                <option value="2025-26">2025-26</option>
                <option value="2024-25">2024-25</option>
                <option value="2023-24">2023-24</option>
              </select>
            </div>
          </div>

        </div>
      </div>


      
    </div>
  );
};

export default IRCWiseLCSummary;