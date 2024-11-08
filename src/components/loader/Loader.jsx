import React from "react";
import { Oval } from "react-loader-spinner";

const Loader = ({ isLoading }) => {
  return (
    isLoading && (
      <div
        tabIndex="-1"
        aria-hidden="true"
        className="fixed top-0 bottom-0 left-0 right-0 z-[100] flex items-center justify-center"
      >
        <div className="relative p-4">
          <Oval
            height={60}
            width={60}
            color="#0000CD"
            secondaryColor="blue"
            ariaLabel="oval-loading"
          />
        </div>
      </div>
    )
  );
};

export default Loader;
