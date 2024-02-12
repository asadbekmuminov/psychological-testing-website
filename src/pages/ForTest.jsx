import React from "react";

function ForTest() {
  const data = [
    {
      info: "Hаyvоnlаrgа qаrаsh (ulаrni bоqish, pаrvа-rish qilish)",
      number: "1a",
    },
  ];

  return (
    <div className="bg-white text-center mb-5 rounded-2xl">
      <h1 className="pt-5 text-xl sm:text-2xl font-bold ">
        Men ma'qul ko'raman
      </h1>
      <div className="flex  w-64 md:w-[700px] sm:w-[500px] flex-col gap-10  p-10">
        <button className="btn w-full text-sm sm:text-base h-28 sm:h-20 btn-outline btn-accent">
          {data[0].info}
        </button>
        <button className="btn w-full text-sm sm:text-base h-28 sm:h-20 btn-outline btn-accent">
          Accent
        </button>
      </div>
    </div>
  );
}

export default ForTest;
