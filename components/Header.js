import Image from "next/image";
import React from "react";

export default function Header() {
  return (
    <div>
      <div className="flex">
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
                <h1 className="font-bebasNeue text-3xl">Axel Coudair</h1>
              </div>
              <div className="row-span-2 col-span-2 ">
                <h1 className="font-bebasNeue text-gray-500 text-3xl">Développeur Full Stack</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="pr-2 place-self-center">
          <Image
            src="/images/icons/download.png"
            alt="download button"
            width={20}
            height={24}
          />
        </div>
      </div>
    </div>
  );
}
