import React from "react";
import Link from "next/link";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import { ArrowRightIcon } from "@heroicons/react/24/solid";

const Pagination = ({
  previous = "",
  next = "",
  showPrevious = true,
  showNext = true,
}) => {
  return (
    <div className="space-y-6 pt-6">
      <div className="bg-gray-200 w-full h-0.5"></div>
      <div className="flex justify-between">
        {showPrevious === true ? (
          <Link href={previous}>
            <button className="previous rounded bg-gray-900 py-0.5 px-2 text-white transition-all flex items-center">
              <ArrowLeftIcon className="arrow-left inline-block w-4 h-4 text-white" />
              Previous
            </button>
          </Link>
        ) : (
          ""
        )}
        {showNext === true ? (
          <Link href={next}>
            <button className="next rounded bg-gray-900 py-0.5 px-2 text-white transition-all flex items-center">
              Next
              <ArrowRightIcon className="arrow-right inline-block w-4 h-4 text-white" />
            </button>
          </Link>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Pagination;
