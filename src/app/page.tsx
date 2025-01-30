"use client";

import { ChangeEvent, useEffect, useMemo, useState } from "react";
import { Advocate } from "../types/advocate";
import AdvocatesTable from "../components/AdvocatesTable";

export default function Home() {
  const [advocates, setAdvocates] = useState<Advocate[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    console.log("fetching advocates...");
    setIsLoading(true);
    fetch("/api/advocates").then((response) => {
      response.json().then((jsonResponse) => {
        setAdvocates(jsonResponse.data);
        setIsLoading(false);
      });
    });
  }, []);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const filteredAdvocates = useMemo(() => {
    console.log("filtering advocates...");

    if (searchTerm === "") {
      return advocates;
    }

    const normalizedSearchTerm = searchTerm.toLowerCase();

    return advocates.filter((advocate) => {
      return (
        advocate.firstName.toLowerCase().includes(normalizedSearchTerm) ||
        advocate.lastName.toLowerCase().includes(normalizedSearchTerm) ||
        advocate.city.toLowerCase().includes(normalizedSearchTerm) ||
        advocate.degree.toLowerCase().includes(normalizedSearchTerm) ||
        advocate.specialties.some((specialty) =>
          specialty.toLowerCase().includes(normalizedSearchTerm)
        ) ||
        advocate.yearsOfExperience.toString().includes(normalizedSearchTerm)
      );
    });
  }, [advocates, searchTerm]);

  const onResetClick = () => {
    console.log(advocates);
    setSearchTerm("");
  };

  return (
    <div className="h-full flex flex-col pt-6 gap-6">
      <div>
        <label htmlFor="search-input">Search</label>
        <div className="flex gap-2 items-center">
          <div className="w-60">
            <input
              placeholder="Search by any field"
              id="search-input"
              className="p-1 w-full border-solid border rounded-lg border-gray-200 hover:border-gray-400 focus:border-sky-500  focus:outline-none focus:ring-0"
              onChange={onChange}
              value={searchTerm}
            />
          </div>
          <button
            className="p-2 rounded-lg hover:bg-zinc-200"
            onClick={onResetClick}
          >
            Clear
          </button>
        </div>
      </div>
      {!isLoading && <AdvocatesTable advocates={filteredAdvocates} />}
    </div>
  );
}
