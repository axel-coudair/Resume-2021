import Image from "next/image";
import React from "react";

export default function Header() {
  return (
    <div>
      <div class="flex">
        <div className="flex-1">
          <Image
            src="/images/logo.png"
            alt="Axel Coudair Logo"
            width={32}
            height={32}
          />
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
