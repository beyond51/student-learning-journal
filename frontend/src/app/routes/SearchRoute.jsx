import React, { useEffect, useState } from "react";
import axios from "axios";
import EntryCard from "../../features/Journal/components/EntryCard";
import { SearchApi } from "../../shared/apis/SearchApi";
import { useOutletContext } from "react-router";

const SearchComponent = () => {
  const [Results, setResults] = useState([]);

  let { searchInput, setSearchInput } = useOutletContext();
  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };

  useEffect(() => {
    if (!searchInput.trim()) {
      setResults([]);
      return;
    }

    const timer = setTimeout(async () => {
      try {
        let data = await SearchApi(searchInput);
        console.log(data);
        setResults(data);
      } catch (error) {
        console.log(error);
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [searchInput]);

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      {/* Header Section */}
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800">Search Results</h1>

          <p className="text-gray-500 mt-2 text-lg">
            Search journal entries by topic, date, and difficulty level.
          </p>
        </div>

        {/* Results Section */}
        <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-6">
          {/* Result Count */}
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-semibold text-gray-700">
              Learning Entries
            </h2>

            <span className="bg-black text-white px-4 py-2 rounded-full text-sm">
              {Results.length} Results
            </span>
          </div>

          {/* Cards Grid */}
          {Results.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Results.map((entry) => (
                <EntryCard key={entry._id} entry={entry} />
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-20">
              <h2 className="text-3xl font-bold text-gray-700">
                No Results Found
              </h2>

              <p className="text-gray-500 mt-3 text-center max-w-md">
                We couldn’t find any journal entries matching your search. Try
                searching with different keywords or filters.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default SearchComponent;
