import React from "react";

export default function Description({description}) {
const {texte, age, localisation, mail,phone} = description;
  return (
    <div>
      <p className="font-manrope font-light">
        {texte}
      </p>
      <p className="font-manrope font-bold pt-4">
        {age} | {localisation} | {mail} | {phone}
      </p>
    </div>
  );
}
