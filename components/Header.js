import Image from "next/image";
import React from "react";

export default function Header() {
  return (
    <div>
      <div class="flex">
        <div className="flex-1">
          <div class="gap-x-4 flex">
            <div class="row-span-3 ">
              <Image
                src="/images/logo.png"
                alt="Axel Coudair Logo"
                width={65}
                height={65}
              />
            </div>
            <div class="grid grid-cols-1 gap-x-4 ">
              <div class="col-span-2 ">
                <span>Axel Coudair</span>
              </div>
              <div class="row-span-2 col-span-2 ">
                <span>Développeur Full Stack</span>
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
