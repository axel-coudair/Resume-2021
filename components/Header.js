import Image from "next/image";
import React from "react";
import ReactToPrint from "react-to-print";

export default function Header({ printable, data }) {
  return (
    <div className="flex pt-7">
      <div className="flex-1">
        <div className="gap-x-4 flex">
          <div className="row-span-3 ">
            <Image
              src="/images/logo.png"
              alt="Axel Coudair Logo"
              width={65}
              height={65}
            />
          </div>
          <div className="grid grid-cols-1 gap-x-4 ">
            <div className="col-span-2 ">
              <h1 className="font-bebasNeue text-3xl">{data.name}</h1>
            </div>
            <div className="row-span-2 col-span-2 ">
              <h1 className="font-bebasNeue text-gray-500 text-2xl">
                {data.jobTitle}
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className=" place-self-center print:hidden">
        <ReactToPrint
          trigger={() => (
            <button className="flex rounded-md hover:bg-gray-200 text-white-100 gap-2 p-1">
              <Image
                src="/images/icons/download.svg"
                alt="download button"
                width={20}
                height={32}
              />
              <span className="hidden sm:block place-self-center">
                Télécharger le CV
              </span>
            </button>
          )}
          content={() => printable}
        />
      </div>
    </div>
  );
}
