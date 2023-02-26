import React from "react";

const InputSearch = ({ label, field, type, onChange }) => {
  return (
    <div className="relative w-4/5 md:w-1/2 lg:w-1/3 pb-10">
      <input
        className="rounded-full shadow-md peer appearance-none bg-white border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 placeholder-transparent"
        placeholder={label}
        id={field}
        name={field}
        type={type}
        onChange={onChange}
      />
      <label
        className="absolute transition-all left-2.5 -top-2.5 bg-white text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-2.5 peer-focus:text-gray-600 peer-focus:text-sm peer-focus:bg-white"
        htmlFor={field}
      >
        {label}
      </label>
    </div>
  );
};

export default InputSearch;
