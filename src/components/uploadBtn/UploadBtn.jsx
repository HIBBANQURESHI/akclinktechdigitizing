import React from "react";

const UploadBtn = () => {
  const onChange = (e) => {
    if (e.target.files === 0) {
      alert("please select a file");
    }
    const file = e.target.file;
    console.log("before: ", e.target.files);
  };

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between w-full gap-4 p-4 mb-4">
        <label
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          for="file_input"
        >
          Upload file
        </label>
        <input
          onChange={(e) => onChange(e)}
          className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
          id="file_input"
          type="file"
        />
      </div>
    </div>
  );
};

export default UploadBtn;
