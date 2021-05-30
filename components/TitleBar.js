import React from "react";

export default function TitleBar({title}) {
  return (
    <div className="pt-3">
      <hr />
      <h2 className="font-bebasNeue text-2xl pt-4 pb-3 text-gray-500">{title}</h2>
    </div>
  );
}
