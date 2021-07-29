import React from "react";

export default function Description({description}) {
const {texte, age, localisation, mail,phone} = description;
  return (
    <div className="md:grid grid-cols-3 grid-flow-col">
      <div className="col-span-2">
        <p className="font-manrope font-light">
          {texte}
        </p>
        <p className="font-manrope font-bold pt-4">
          {age} | {localisation} | {mail} | {phone}
        </p>
      </div>
    </div>
  );
}
