import React from "react";

export default function ListedPart({ lists }) {
  return (
    <div className="grid md:grid-cols-6 gap-4">
      <div className="hidden md:block"></div>
      <div className="hidden md:block"></div>
      {lists.map((list, index) => (
        <div key={index} className="pb-2">
          <h4 className="text-xl font-semi-bold">{list.title}</h4>
          <ul className="list-disc list-inside pt-2">
            {list.data.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
