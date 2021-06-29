import React from "react";
import QRCode from 'qrcode.react';

export default function QrPart({path}) {
  return (
  <div className="hidden sm:block ">
    <QRCode value={"https://axel-coudair-resume.netlify.app/"+ path} />
  </div>
  );
}
