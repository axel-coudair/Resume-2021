import React from "react";

export default function Description({description}) {
const {texte, age, localisation, mail,phone} = description;
  return (
    <div className="max-w-xl py-6">
      <p className="font-manrope font-light">
        {texte}
      </p>
      <p className="font-manrope font-bold pt-4">
        {age} | {localisation} | {mail} | {phone}
      </p>
    </div>
  );
}
